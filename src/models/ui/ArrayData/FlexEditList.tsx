import {Col, Row} from "antd";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

interface ViewListProps {
    flex?: boolean;
    data: any[];
    setOpen: any;
    setEditData: any;
    onAdd: any;
}

const FlexEditList: React.FC<ViewListProps> = ({
                                                   onAdd,
                                                   setOpen,
                                                   setEditData,
                                                   data
                                               }) => {
    return (
        <>
            <Row gutter={24}>
                {data?.map((d, index) => (
                    <Col span={8}>
                        <Row>
                            <Col span={22}>
                                <d.Show/>
                            </Col>
                            <Col span={2}>
                                <DeleteIcon
                                    style={{
                                        color: 'var(--color-red)'
                                    }}
                                    onClick={(e) => {
                                        setOpen(true);
                                        setEditData(d)
                                        e?.stopPropagation();
                                    }}
                                />
                            </Col>
                        </Row>
                    </Col>
                ))}
                <Col
                    span={8}
                >
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={(e) => {
                            onAdd();
                            e?.stopPropagation();
                        }}>
                        <AddIcon style={{
                            color: 'var(--color-primary)'
                        }}/>
                        增加
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export default FlexEditList