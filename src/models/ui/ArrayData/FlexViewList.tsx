import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import {Col, Row} from "antd";
import Button from "@mui/material/Button";

interface ViewListProps {
    flex?: boolean;
    canEdit?: boolean;
    data: any[];
    setOpen: any;
    setEditData: any;
    onAdd: any;
}

const FlexViewList: React.FC<ViewListProps> = ({
                                                   onAdd,
                                                   setOpen,
                                                   setEditData,
                                                   canEdit,
                                                   data
                                               }) => {
    return (
        <>
            <Row gutter={24}>
                {data?.map((d, index) => (
                    <Col span={8}>
                        <Row style={{
                            border: '1px solid gray',
                            borderRadius: 4,
                            margin: 2,
                            padding: 2,
                        }}>
                            <Col span={canEdit ? 22 : 24}>
                                <d.Show/>
                            </Col>
                            {
                                canEdit && (
                                    <Col span={2}>
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
                {canEdit && (
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
                                onAdd();
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

export default FlexViewList