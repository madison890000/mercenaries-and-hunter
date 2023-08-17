import Base from "./Base";
import Button from "@mui/material/Button";
import useReload from "./hooks/useReload";
import {v4} from "uuid";
import {Col, Row} from "antd";

const DeleteComponent = ({children, onDelete}: any) => {
    return (
        <div style={{
            position: "relative",
        }}>
            <div style={{
                position: "absolute",
                right: 0,
                top: 0,
                zIndex: 100,
            }}><Button onClick={onDelete} color="warning">删除</Button></div>
            {children}
        </div>
    )
}
const EditComponent = ({data, onAdd, onDelete, flex}: any) => {
    return (
        <>
            <div>
                {data?.map((d: { Show: any; id: string }) => {
                    const content = (<DeleteComponent onDelete={() => {
                        onDelete(d?.id);
                    }}>
                        <d.Show/>
                    </DeleteComponent>);
                    return content
                })}
            </div>
            <div><Button onClick={() => {
                onAdd();
            }}>增加</Button></div>
        </>
    )
}

const EditFlexComponent = ({data, onAdd, onDelete}: any) => {
    return (
        <>
            <Row>
                {data?.map((d: { Show: any; id: string }) => {
                    const content = (<DeleteComponent onDelete={() => {
                        onDelete(d?.id);
                    }}>
                        <d.Show/>
                    </DeleteComponent>);
                    return (
                        <Col span={8}>
                            {content}
                        </Col>
                    )
                })}
            </Row>
            <div><Button onClick={() => {
                onAdd();
            }}>增加</Button></div>
        </>
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
    private flex?: boolean;
    private editText: string | undefined;

    constructor(data: T[], origin: T, flex?: boolean, editText?: string) {
        super();
        this.data = data;
        data?.map(d => {
            if (d?.needProxyParent) {
                d.parent = this;
            }
        })
        this.origin = origin;
        this.flex = flex;
        this.editText = editText;
    }


    View = () => {
        if (this.isPreview) {
            if (this.flex) {
                return (
                    <Row>
                        {this.data?.map(d => <Col span={8}>
                            <d.Show/>
                        </Col>)}
                    </Row>
                )
            }
            return (
                <>
                    {this.data?.map(d => <d.Show/>)}
                </>
            )
        }
        if (this.flex) {
            return (
                <this.ViewWrapper editText={this.editText}>
                    <Row>
                        {this.data?.map(d => <Col span={8}>
                            <d.Show/>
                        </Col>)}
                    </Row>
                </this.ViewWrapper>
            )
        }
        return (
            <this.ViewWrapper editText={this.editText}>
                {this.data?.map(d => <d.Show/>)}
            </this.ViewWrapper>
        )
    }

    onAdd = () => {
        const newItem = this.origin.clone();
        newItem.parent = this;
        newItem.id = v4();
        console.log(newItem)
        this.data.push(newItem)
    }
    onDelete = (id: string) => {
        this.data = [...this.data?.filter(d => d?.id !== id)]
    }
    Edit = () => {
        const reload = useReload();
        if (this.flex) {
            return <this.ViewWrapper editText={this.editText}><EditFlexComponent data={this.data} onAdd={() => {
                this.onAdd();
                reload()
            }} onDelete={(e: any) => {
                this.onDelete(e);
                reload()
            }}/></this.ViewWrapper>
        }
        return (
            <this.ViewWrapper editText={this.editText}>
                <EditComponent flex={this.flex} data={this.data} onAdd={() => {
                    this.onAdd();
                    reload()
                }} onDelete={(e: any) => {
                    this.onDelete(e);
                    reload()
                }}/>
            </this.ViewWrapper>
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