import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "../../components/Button";

type EditType = 'view' | 'edit' | 'preview';

interface ShowProps {
    View: any;
    Edit: any;
    setIsHidden: any;
    setEditType: any;
    onTranslate: any;
    canTranslate: boolean;
    canEdit: boolean;
    canHidden: boolean;
    showEditButton: boolean;
    isHidden?: boolean;
    isPreview: boolean;
    editType: EditType;

}

const Show: React.FC<ShowProps> = ({
                                       isPreview,
                                       canTranslate,
                                       isHidden,
                                       canEdit,
                                       showEditButton,
                                       editType,
                                       onTranslate,
                                       canHidden,
                                       View,
                                       Edit,
                                       setIsHidden,
                                       setEditType
                                   }) => {
    if (isPreview) {
        return isHidden ? <></> : <View/>
    }
    const showButtons = () => {
        if (canTranslate) {
            return true
        }
        if (canHidden) {
            return true
        }
        if (editType === "view" && !canEdit && showEditButton) {
            return true
        }
        if (editType === 'edit') {
            return true
        }
        return false
    }
    return (
        <div style={{display: 'flex'}}>
            <div style={{
                width: "auto",
                flex: '1 1 auto',
                minHeight: showButtons() ? '60px' : 'auto'
            }}>
                {!canEdit ? <View/> : <Edit/>}
            </div>
            {
                showButtons() && (
                    <div style={{width: 60}}>
                        {
                            canHidden && (
                                <div onClick={() => {
                                    setIsHidden(!isHidden);
                                }} style={{
                                    textAlign: 'center'
                                }}>
                                    {!isHidden && <VisibilityIcon color="success"/>}
                                    {isHidden && <VisibilityOffIcon color="error"/>}
                                </div>
                            )
                        }
                        <div>
                            {
                                editType === 'view' && !canEdit && showEditButton && <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() => {
                                        setEditType('edit');
                                    }}>
                                    编辑
                                </Button>
                            }
                        </div>
                        <div>
                            {
                                editType === 'edit' && (
                                    <Button
                                        onClick={() => {
                                            setEditType('view');
                                        }}
                                        size="small"
                                        variant="contained"
                                    >
                                        完成
                                    </Button>
                                )
                            }
                        </div>
                        {
                            canTranslate && !canEdit && (
                                <div>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={async () => {
                                            await onTranslate?.();
                                        }}>
                                        翻译
                                    </Button>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>);
}

export default Show