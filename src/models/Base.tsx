import {v4} from 'uuid';
import Dayjs from 'dayjs';
import React, {PropsWithChildren, useEffect} from "react";
import {Card} from "antd";
import useReload from "./hooks/useReload";
import Button from "@mui/material/Button";

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
        <Card>
            <div>
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
            </div>
            <div>
                {children}
            </div>
        </Card>
    )
}

export default class Base {
    readonly id: string;
    private _editType!: EditType;
    parent: any;
    children: any[];
    public needProxyParent = true;
    ViewWrapper: React.FC<React.PropsWithChildren<{ editText?: string }>>;
    private watch: Record<string, any[]>;

    constructor() {
        this.id = v4();
        this.editType = 'view';
        const onEdit = () => {
            this.editType = 'edit';
        }
        const onSave = () => {
            this.editType = 'view';
        }
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

    get canEdit() {
        const innerEdit = this.isPreview ? false : this.editType === 'edit';
        const parent = this.parent;
        if (!innerEdit && parent) {
            return parent?.canEdit
        } else {
            return innerEdit
        }
    }

    get isPreview() {
        const innerEdit = this.editType === 'preview';
        const parent = this.parent;
        if (!innerEdit && parent) {
            return parent?.isPreview
        } else {
            return innerEdit
        }
    }

    emit(name: string, params: any) {
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

    Show = () => {
        const reload = useReload();
        useEffect(() => {
            this.on('type-change', () => {
                try {
                    reload();
                } catch (e) {
                    console.log(e)
                }
            })
        }, []);
        return <>{!this.canEdit ? <this.View/> : <this.Edit/>}</>;
    }


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

    Edit = () => {
        return <this.View/>
    }
}
