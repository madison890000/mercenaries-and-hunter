import {v4} from 'uuid';
import Dayjs from 'dayjs';
import React, {PropsWithChildren, useEffect} from "react";
import {Row} from "antd";
import useReload from "./hooks/useReload";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import {nonenumerable} from "core-decorators";

type EditType = 'view' | 'edit' | 'preview';

interface ViewWrapperProps {
    onEdit: () => void;
    onSave: () => void;
    editType: EditType;
    canEdit: boolean;
    editText?: string;
}

const InnerViewWrapper: React.FC<PropsWithChildren<ViewWrapperProps>> = ({
                                                                             editText,
                                                                             canEdit,
                                                                             editType,
                                                                             children,
                                                                             onSave,
                                                                             onEdit
                                                                         }) => {
    const reload = useReload();
    return (
        <Card style={{
            padding: 5
        }}>
            <Row justify="space-between">
                {
                    editType === 'view' && !canEdit && <Button onClick={() => {
                        onEdit();
                        reload();
                    }}>
                        {editText ?? '编辑'}
                    </Button>
                }
                {
                    editType === 'edit' && <Button onClick={() => {
                        onSave();
                        reload();
                    }}>
                        保存
                    </Button>
                }
            </Row>
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
    ViewWrapper: React.FC<React.PropsWithChildren<{ editText?: string; onTranslate?: () => Promise<void> }>>;
    @nonenumerable
    private watch: Record<string, any[]>;
    @nonenumerable
    public canTranslate: boolean;

    constructor() {
        this.id = v4();
        this.editType = 'view';
        const onEdit = () => {
            this.editType = 'edit';
        }
        const onSave = () => {
            this.editType = 'view';
        };
        this.canTranslate = false;
        this.ViewWrapper = ({children, editText}) => {
            return (
                <InnerViewWrapper
                    editText={editText}
                    editType={this.isPreview ? 'preview' : this.editType}
                    onEdit={onEdit}
                    onSave={onSave}
                    canEdit={this.canEdit}
                >{children}</InnerViewWrapper>
            )
        };
        this.watch = {};
        this.children = [];
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
            return <>{!this.canEdit ? <View/> : <Edit/>}</>
        }
        const showTranslateBtn = this.canTranslate && !this.canEdit;
        return (
            <div style={{position: 'relative'}}>
                <div style={{
                    width: showTranslateBtn ? 'calc(100% - 60px)' : 'auto'
                }}>
                    {!this.canEdit ? <View/> : <Edit/>}
                </div>
                {
                    showTranslateBtn && (
                        <div style={{width: 60, position: "absolute", top: 0, right: 0}}>
                            <Button onClick={async () => {
                                await this.onTranslate?.();
                                reload();
                            }}>
                                翻译
                            </Button>
                        </div>
                    )
                }
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
