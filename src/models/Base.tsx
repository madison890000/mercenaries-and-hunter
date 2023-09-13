import {v4} from 'uuid';
import Dayjs from 'dayjs';
import React, {useEffect} from "react";
import {nonenumerable} from "core-decorators";
import InnerViewWrapper from "./ui/Base/InnerViewWrapper";
import Show from "./ui/Base/Show";
import useReload from "./hooks/useReload";

type EditType = 'view' | 'edit' | 'preview';

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

    on = (name: string, cb: any) => {
        if (this.watch[name]) {
            this.watch[name].push(cb);
        } else {
            this.watch[name] = [cb]
        }
    }

    @nonenumerable
    Show = () => {
        const View = this.View;
        const Edit = this.Edit;
        const reload = useReload();
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
        return (
            <Show
                View={View}
                Edit={Edit}
                setIsHidden={(e: boolean | undefined) => {
                    this.isHidden = e;
                    reload();
                }}
                setEditType={(e: EditType) => {
                    this.editType = e
                }}
                onTranslate={this.onTranslate}
                canTranslate={this.canTranslate}
                canEdit={this.canEdit}
                canHidden={this.canHidden}
                showEditButton={this.showEditButton}
                isHidden={this.isHidden}
                isPreview={this.isPreview}
                editType={this.editType}
            />
        )
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
