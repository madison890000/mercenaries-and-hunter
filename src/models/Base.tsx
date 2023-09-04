import {v4} from 'uuid';
import Dayjs from 'dayjs';
import React, {PropsWithChildren, useEffect} from "react";
import useReload from "./hooks/useReload";
import Button from "./components/Button";
import Card from "@mui/material/Card";
import {nonenumerable} from "core-decorators";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type EditType = 'view' | 'edit' | 'preview';

interface ViewWrapperProps {
    editType: EditType;
    canEdit: boolean;
    editDescriptions?: string;
}

const InnerViewWrapper: React.FC<PropsWithChildren<ViewWrapperProps>> = ({
                                                                             canEdit,
                                                                             editType,
                                                                             editDescriptions,
                                                                             children,
                                                                         }) => {
    return (
        <Card style={{
            padding: 5
        }}>
            {
                editType === 'view' && !canEdit && editDescriptions && (
                    <div style={{
                        color: 'gray',
                    }}>
                        {editDescriptions ?? ''}
                    </div>
                )
            }
            <div>
                {children}
            </div>
        </Card>
    )
}

export default class Base {
    @nonenumerable
    readonly id: string;
    @nonenumerable
    private _editType!: EditType;
    @nonenumerable
    parent: any;
    @nonenumerable
    children: any[];
    @nonenumerable
    public needProxyParent = true;
    @nonenumerable
    ViewWrapper: React.FC<React.PropsWithChildren<{
        editText?: string;
        editDescriptions?: string;
        onTranslate?: () => Promise<void>
    }>>;
    @nonenumerable
    private watch: Record<string, any[]>;
    @nonenumerable
    public canTranslate: boolean;
    @nonenumerable
    public showName: string;
    @nonenumerable
    public showEditButton: boolean;
    public isHidden?: boolean;
    @nonenumerable
    public canHidden: boolean;

    constructor() {
        this.id = v4();
        this.editType = 'view';
        this.canTranslate = false;
        this.showEditButton = false;
        this.ViewWrapper = ({children, editDescriptions}) => {
            return (
                <InnerViewWrapper
                    editDescriptions={editDescriptions}
                    editType={this.isPreview ? 'preview' : this.editType}
                    canEdit={this.canEdit}
                >{children}</InnerViewWrapper>
            )
        };
        this.watch = {};
        this.children = [];
        this.canHidden = false;
    }

    async onTranslate() {

    }

    setParent(parent: any) {
        this.parent = parent;
        if (parent?.children) {
            parent.children.push(this);
        } else {
            parent.children = [this];
        }
        return this;
    }

    set editType(e: EditType) {
        if (this._editType != undefined && this._editType !== e) {
            this.emit('type-change', e);
            console.log('editType change', this._editType, e)
        }
        this._editType = e;
    }

    get editType() {
        return this._editType
    }

    getDateFromString(): undefined
    getDateFromString(time?: string): Dayjs.Dayjs | undefined
    getDateFromString(time: string, initial: false): Dayjs.Dayjs | undefined
    getDateFromString(time: string, initial: true): Dayjs.Dayjs
    getDateFromString(time?: string, initial?: boolean): Dayjs.Dayjs | undefined {
        if (time) {
            return Dayjs(time)
        }
        if (initial) {
            return Dayjs()
        }
        return undefined
    }

    toggleEditType() {
        this.editType = this.editType === 'view' ? 'edit' : 'view'
    }

    @nonenumerable
    get canEdit() {
        const innerEdit = this.isPreview ? false : this.editType === 'edit';
        const parent = this.parent;
        if (!innerEdit && parent) {
            return parent?.canEdit
        } else {
            return innerEdit
        }
    }

    @nonenumerable
    get isPreview() {
        const innerEdit = this.editType === 'preview';
        const parent = this.parent;
        if (!innerEdit && parent) {
            return parent?.isPreview
        } else {
            return innerEdit
        }
    }

    emit(name: string, params?: any) {
        this.watch?.[name]?.forEach((e) => {
            e(params);
        })
    }

    on(name: string, cb: any) {
        if (this.watch[name]) {
            this.watch[name].push(cb);
        } else {
            this.watch[name] = [cb]
        }
    }

    @nonenumerable
    Show = () => {
        const reload = useReload();
        const View = this.View;
        const Edit = this.Edit;
        useEffect(() => {
            this.on('type-change', () => {
                try {
                    reload();
                } catch (e) {
                    console.log(e)
                }
            });
            this.on('value-change', () => {
                try {
                    reload();
                } catch (e) {
                    console.log(e)
                }
            })
        }, []);
        if (this.isPreview) {
            return this.isHidden ? <></> : <View/>
        }
        const showButtons = () => {
            if (this.canTranslate) {
                return true
            }
            if (this.editType === "view" && !this.canEdit && this.showEditButton) {
                return true
            }
            if (this.editType === 'edit') {
                return true
            }
            return false
        }
        return (
            <div style={{position: 'relative'}}>
                <div style={{
                    width: showButtons() ? 'calc(100% - 60px)' : "auto",
                    minHeight: showButtons() ? '90px' : 'auto'
                }}>
                    {!this.canEdit ? <View/> : <Edit/>}
                </div>
                <div style={{width: 60, position: "absolute", top: 0, right: 0}}>
                    {
                        this.canHidden && (
                            <div onClick={() => {
                                this.isHidden = !this.isHidden;
                                reload();
                            }} style={{
                                textAlign: 'center'
                            }}>
                                {!this.isHidden && <VisibilityIcon color="success"/>}
                                {this.isHidden && <VisibilityOffIcon color="error"/>}
                            </div>
                        )
                    }
                    <div>
                        {
                            this.editType === 'view' && !this.canEdit && this.showEditButton && <Button
                                variant="contained"
                                onClick={() => {
                                    this.editType = 'edit';
                                    reload();
                                }}>
                                编辑
                            </Button>
                        }
                    </div>
                    <div>
                        {
                            this.editType === 'edit' && (
                                <Button
                                    onClick={() => {
                                        this.editType = 'view';
                                        reload();
                                    }}
                                    variant="contained"
                                >
                                    完成
                                </Button>
                            )
                        }
                    </div>
                    {
                        this.canTranslate && !this.canEdit && (
                            <div>
                                <Button
                                    variant="outlined"
                                    onClick={async () => {
                                        await this.onTranslate?.();
                                        reload();
                                    }}>
                                    翻译
                                </Button>
                            </div>
                        )
                    }
                </div>
            </div>);
    }

    @nonenumerable
    View = () => {
        return <div/>
    }

    renewChildren(newOne: any) {
        if (newOne?.children?.length > 0) {
            newOne.children?.forEach((e: {
                children: any[];
                id: string; parent: any;
            }) => {
                e.id = v4();
                e.parent = newOne;
                if (e?.children?.length > 0) {
                    this.renewChildren(e)
                }
            })
        }
    }

    clone() {
        const newOne = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        this.renewChildren(newOne)
        return newOne
    }

    @nonenumerable
    Edit = () => {
        const View = this.View;
        return <View/>
    }


}
