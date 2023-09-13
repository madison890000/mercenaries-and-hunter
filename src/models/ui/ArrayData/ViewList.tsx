import {SyntheticEvent, useState} from "react";
import Button from "@mui/material/Button";
import {Box, Modal} from "@mui/material";
import FlexViewList from "./FlexViewList";
import NormalViewList from "./NormalViewList";

interface ViewListProps {
    flex?: boolean;
    canEdit?: boolean;
    data: any[];
    onAdd: any;
    onDelete: any;
}

const ViewList: React.FC<ViewListProps> = ({onAdd, onDelete, canEdit, flex, data}) => {
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
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
    const [editData, setEditData] = useState<any>();
    return (
        <>
            {
                !flex && (
                    <NormalViewList
                        value={value}
                        handleChange={handleChange}
                        setValue={setValue}
                        data={data}
                        setOpen={setOpen}
                        setEditData={setEditData}
                        onAdd={onAdd}
                        canEdit={canEdit}
                    />
                )
            }
            {
                flex &&
                <FlexViewList canEdit={canEdit} data={data} onAdd={onAdd} setEditData={setEditData} setOpen={setOpen}/>
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
                                if (value === data.length - 1) {
                                    setValue(data.length - 2)
                                }
                                onDelete(editData?.id);
                            }}>删除</Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ViewList