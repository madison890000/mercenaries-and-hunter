import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

interface ViewListProps {
    flex?: boolean;
    canEdit?: boolean;
    data: any[];
    setOpen: any;
    setEditData: any;
    onAdd: any;
    value: any;
    setValue: any;
    handleChange: any;
}

const NormalViewList: React.FC<ViewListProps> = ({
                                                     onAdd,
                                                     setEditData,
                                                     setOpen,
                                                     flex,
                                                     data,
                                                     value,
                                                     setValue,
                                                     handleChange,
                                                 }) => {

    return (
        <>
            {
                !flex && (
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
                                        <HighlightOffIcon
                                            style={{
                                                color: 'red',
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
                                    <ControlPointIcon color="success"/>
                                }

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
        </>
    )
}

export default NormalViewList