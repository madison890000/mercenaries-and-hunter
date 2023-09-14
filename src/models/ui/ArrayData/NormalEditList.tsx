import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';

interface ViewListProps {
    data: any[];
    setOpen: any;
    setEditData: any;
    onAdd: any;
    value: any;
    setValue: any;
    handleChange: any;
}

const NormalEditList: React.FC<ViewListProps> = ({
                                                     onAdd,
                                                     setEditData,
                                                     setOpen,
                                                     data,
                                                     value,
                                                     setValue,
                                                     handleChange,
                                                 }) => {

    return (
        <div>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
            >
                {data?.map((d, index) => (
                    <Tab
                        label={`${d?.showName} ${index + 1}`}
                        icon={
                            <DeleteIcon
                                style={{
                                    color: 'var(--color-red)',
                                    fontSize: 16
                                }}
                                onClick={(e) => {
                                    setOpen(true);
                                    setEditData(d);
                                    e?.stopPropagation();
                                }}
                            />
                        }
                        iconPosition="end"
                        style={{
                            minHeight: 40
                        }}
                    />
                ))}
                <Tab
                    onClick={(e) => {
                        onAdd();
                        setValue(data.length - 1)
                        e?.stopPropagation();
                    }}
                    icon={
                        <AddBoxIcon style={{
                            color: 'var(--color-primary)'
                        }}/>
                    }
                    className="add"
                    iconPosition="end"
                    label=""
                />
            </Tabs>
            {data?.map((d, index) => (
                <div style={{
                    display: value === index ? 'block' : 'none'
                }}>
                    <d.Show/>
                </div>
            ))}
        </div>
    )
}

export default NormalEditList