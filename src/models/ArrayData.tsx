import Base from "./Base";
import Preview from "./ui/ArrayData/Preview";
import EditList from "./ui/ArrayData/EditList";
import useReload from "./hooks/useReload";

export default class ArrayData<T extends {
    View: any;
    Edit: any;
    showName: string;
    Show: any;
    needProxyParent: boolean;
    parent: any;
    editType: any;
    id: string;
    toJSON?: () => any;
    canHidden?: boolean;
    isHidden?: boolean;
}> extends Base {
    data: T[];
    private origin: () => T;
    private flex?: boolean;
    private editDescriptions: string | undefined;

    constructor(data: T[], origin: () => T, flex?: boolean, editDescriptions?: string) {
        super();
        this.data = data;
        data?.map(d => {
            if (d?.needProxyParent) {
                d.parent = this;
            }
        })
        this.origin = origin;
        this.flex = flex;
        this.showEditButton = flex ?? false;
        this.editDescriptions = editDescriptions;
    }


    Preview = () => <Preview flex={this.flex} data={this.data}/>
    EditList = () => {
        const reload = useReload();
        return (
            <EditList
                data={this.data}
                onAdd={() => {
                    this.onAdd();
                    reload();
                }}
                onDelete={(e: string | undefined) => {
                    this.onDelete(e);
                    reload();
                }}
                flex={this.flex}
            />
        )
    }
    View = () => {
        const ViewWrapper = this.ViewWrapper;
        const Preview = this.Preview;
        const EditList = this.EditList;
        if (this.isPreview) {
            return <Preview/>
        }
        return (
            <ViewWrapper editDescriptions={this.editDescriptions}>
                <EditList/>
            </ViewWrapper>
        )

    }

    onAdd = () => {
        const newItem = this.origin();
        newItem.parent = this;
        newItem.editType = 'edit';
        this.data.push(newItem)
    }
    onDelete = (id?: string) => {
        if (!id) {
            return
        }
        this.data = [...this.data?.filter(d => d?.id !== id)]
    }

    concat(data: T[]) {
        data?.map(d => {
            if (d?.needProxyParent) {
                d.parent = this;
            }
        })
        this.data = this.data.concat(data)
    }

    toJSON() {
        return [
            ...this.data
        ]
    }
}