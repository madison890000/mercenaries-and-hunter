import Base from "./Base";
import Button from "@mui/material/Button";
import {Col, Row} from "antd";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {SyntheticEvent, useState} from "react";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {Box, Modal} from "@mui/material";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
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


    Preview = () => {
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
    ViewList = () => {
        const [value, setValue] = useState(0);
        const [open, setOpen] = useState(false);
        const handleChange = (event: SyntheticEvent, newValue: number) => {
            setValue(newValue);
        };
        const reload = useReload();
        const style = {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        };
        const [editData, setEditData] = useState<T>();
        return (
            <>
                {
                    !this.flex && (
                        <>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                            >
                                {this.data?.map((d, index) => (
                                    <Tab
                                        label={`${d?.showName} ${index + 1}`}
                                        icon={<HighlightOffIcon
                                            style={{
                                                color: 'red'
                                            }}
                                            onClick={(e) => {
                                                setOpen(true);
                                                setEditData(d);
                                                e?.stopPropagation();
                                            }}/>} iconPosition="end"
                                    />
                                ))}
                                <Tab
                                    onClick={(e) => {
                                        this.onAdd();
                                        reload();
                                        setValue(this.data.length - 1)
                                        e?.stopPropagation();
                                    }}
                                    icon={
                                        <ControlPointIcon color="success"/>
                                    }

                                    iconPosition="end"
                                    label=""
                                />
                            </Tabs>
                            {this.data?.map((d, index) => (
                                <div style={{
                                    display: value === index ? 'block' : 'none'
                                }}>
                                    <d.Show/>
                                </div>
                            ))}
                        </>
                    )
                }
                {
                    this.flex && (
                        <>
                            <Row gutter={12}>
                                {this.data?.map((d, index) => (
                                    <Col span={8}>
                                        <Row>
                                            <Col span={this.canEdit ? 20 : 24}>
                                                <d.Show/>
                                            </Col>
                                            {
                                                this.canEdit && (
                                                    <Col span={4}>
                                                        <HighlightOffIcon
                                                            style={{
                                                                color: 'red'
                                                            }}
                                                            onClick={(e) => {
                                                                setOpen(true);
                                                                setEditData(d)
                                                                e?.stopPropagation();
                                                            }}
                                                        />
                                                    </Col>
                                                )
                                            }
                                        </Row>
                                    </Col>
                                ))}
                                {this.canEdit && (
                                    <Col
                                        span={8}
                                    >
                                        <Button
                                            style={{
                                                background: 'green',
                                            }}
                                            variant="contained"
                                            fullWidth
                                            onClick={(e) => {
                                                this.onAdd();
                                                reload();
                                                e?.stopPropagation();
                                            }}>
                                            增加
                                            {/*<ControlPointIcon color="error"/>*/}
                                        </Button>
                                    </Col>
                                )}
                            </Row>
                        </>
                    )
                }
                <Modal
                    open={open}
                    onClose={() => {
                        setOpen(false)
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div style={{
                            width: '100%',
                            padding: 20,
                            textAlign: 'center'
                        }}>
                            确认删除？
                        </div>
                        <div style={{
                            textAlign: 'right'
                        }}>
                            <Button
                                variant="outlined"
                                onClick={() => {
                                    setOpen(false);
                                }}
                                style={{
                                    marginRight: 40
                                }}
                            >取消</Button>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setOpen(false);
                                    if (value === this.data.length - 1) {
                                        setValue(this.data.length - 2)
                                    }
                                    this.onDelete(editData?.id);
                                    reload();
                                }}>删除</Button>
                        </div>
                    </Box>
                </Modal>
            </>
        )
    }
    View = () => {
        const ViewWrapper = this.ViewWrapper;
        const Preview = this.Preview;
        const ViewList = this.ViewList;
        if (this.isPreview) {
            return <Preview/>
        }
        return (
            <ViewWrapper editDescriptions={this.editDescriptions}>
                <ViewList/>
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