import Base from "./Base";
import {Card} from "antd";
import Button from "@mui/material/Button";
import useReload from "./hooks/useReload";

const DeleteComponent = ({children, onDelete}: any) => {
    return (
        <div>
            <Button onClick={onDelete}>删除</Button>
            {children}
        </div>
    )
}
const EditComponent = ({data, onAdd, onDelete}: any) => {
    return (
        <Card title={
            <Button onClick={() => {
                onAdd();
            }}>增加</Button>
        }>{data?.map((d: { Show: any; id: string }) => <DeleteComponent onDelete={() => {
            onDelete(d?.id);
        }}>
            <d.Show/>
        </DeleteComponent>)}</Card>
    )
}


export default class ArrayData<T extends {
    View: any;
    Edit: any;
    Show: any;
    needProxyParent: boolean;
    parent: any;
    id: string;
}> extends Base {
    data: T[];
    private origin: any;

    constructor(data: any[], origin: any) {
        super();
        this.data = data;
        data?.map(d => {
            if (d?.needProxyParent) {
                d.parent = this;
            }
        })
        this.origin = origin;
    }

    View = () => {
        return (
            <this.ViewWrapper>{this.data?.map(d => <d.Show/>)}</this.ViewWrapper>
        )
    }

    onAdd = () => {
        const newItem = new this.origin();
        newItem.parent = this;
        this.data.push(newItem)
    }
    onDelete = (id: string) => {
        this.data = [...this.data?.filter(d => d?.id !== id)]
    }
    Edit = () => {
        const reload = useReload();
        return (
            <EditComponent data={this.data} onAdd={() => {
                this.onAdd();
                reload()
            }} onDelete={(e: any) => {
                this.onDelete(e);
                reload()
            }}/>
        )
    }

    concat(data: T[]) {
        data?.map(d => {
            if (d?.needProxyParent) {
                d.parent = this;
            }
        })
        this.data = this.data.concat(data)
    }
}