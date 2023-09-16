import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "../../components/Button";
import {defineMessages, useIntl} from "react-intl";

const messages = defineMessages({
    translate: {
        id: 'btn.translate',
    }
});

interface ShowProps {
    View: any;
    Edit: any;
    setIsHidden: any;
    onTranslate: any;
    canTranslate: boolean;
    canHidden: boolean;
    isHidden?: boolean;
    isPreview: boolean;
}

const Show: React.FC<ShowProps> = ({
                                       isPreview,
                                       canTranslate,
                                       isHidden,
                                       onTranslate,
                                       canHidden,
                                       View,
                                       Edit,
                                       setIsHidden,
                                   }) => {
    const intl = useIntl();
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
        return false
    }
    return (
        <div style={{display: 'flex'}}>
            <div style={{
                width: "100%",
                // flex: '1 1 auto',
                minHeight: showButtons() ? '60px' : 'auto'
            }}>
                <Edit/>
            </div>
            {
                showButtons() && (
                    <div style={{width: 80}}>
                        {
                            canHidden && (
                                <div onClick={() => {
                                    setIsHidden(!isHidden);
                                }} style={{
                                    textAlign: 'center'
                                }}>
                                    {!isHidden && <VisibilityIcon style={{
                                        color: 'var(--color-primary)'
                                    }}/>}
                                    {isHidden && <VisibilityOffIcon color="error"/>}
                                </div>
                            )
                        }
                        {
                            canTranslate && (
                                <div>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={async () => {
                                            await onTranslate?.();
                                        }}>
                                        {intl.formatMessage(messages.translate)}
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