import {v4} from 'uuid';
import Dayjs from 'dayjs';
import React, {PropsWithChildren, useEffect} from "react";
import {Card} from "antd";
import useReload from "./hooks/useReload";
import Button from "@mui/material/Button";

interface ViewWrapperProps {
    onEdit: () => void;
    onSave: () => void;
}

const InnerViewWrapper: React.FC<PropsWithChildren<ViewWrapperProps>> = ({children, onSave, onEdit}) => {
    const reload = useReload();
    return (
        <Card title={
            <>
                <Button onClick={() => {
                    onEdit();
                    reload();
                }}>
                    编辑
                </Button>
                <Button onClick={() => {
                    onSave();
                    reload();
                }}>
                    保存
                </Button>
            </>
        }>{children}</Card>
    )
}

export default class Base {
    readonly id: string;
    private _editType!: 'view' | 'edit';
    parent: any;
    public needProxyParent = true;
    ViewWrapper: React.FC<React.PropsWithChildren>;
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
        this.ViewWrapper = ({children}) => {
            return (
                <InnerViewWrapper onEdit={onEdit} onSave={onSave}>{children}</InnerViewWrapper>
            )
        };
        this.watch = {};
    }

    setParent(parent: any) {
        this.parent = parent;
        return this;
    }

    set editType(e: 'view' | 'edit') {
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
        const innerEdit = this.editType === 'edit';
        const parent = this.parent;
        if (!innerEdit && parent) {
            return parent?.canEdit
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
        // console.log(this.canEdit, this.editType)
        return <>{!this.canEdit ? <this.View/> : <this.Edit/>}</>;
    }


    View = () => {
        return <div/>
    }


    Edit = () => {
        return <this.View/>
    }
}
