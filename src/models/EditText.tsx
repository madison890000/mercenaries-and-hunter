import Base from "./Base";
import {TextField} from "@mui/material";
import ProxyWithParent from "./ProxyWithParent";

class EditText extends Base {
    public text: string;
    private inputType: "input" | "textarea";
    private label?: string;

    constructor(text: string = '', type: 'input' | 'textarea' = 'input', label?: string) {
        super();
        this.text = text;
        this.inputType = type;
        this.label = label;
    }

    View = () => {
        return <>{this.text}</>
    }

    Edit = () => {
        if (this.inputType === 'input') {
            return (
                <TextField
                    label={this.label}
                    fullWidth
                    defaultValue={this.text}
                    onChange={(e) => {
                        this.text = e?.target?.value
                    }}
                />
            )
        } else {
            return (
                <TextField
                    label={this.label}
                    onChange={(e) => {
                        this.text = e?.target?.value
                    }}
                    fullWidth
                    defaultValue={this.text}
                    variant="filled"
                    multiline
                />
            )
        }
    }
}

export default EditText;