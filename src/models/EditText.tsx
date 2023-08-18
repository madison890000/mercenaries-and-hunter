import Base from "./Base";
import {TextField} from "@mui/material";

class EditText extends Base {
    public text?: string | undefined;
    private inputType: "input" | "textarea";
    private label?: string;
    private placeholder: string | undefined;

    constructor(text: string, type: 'input' | 'textarea' = 'input', label?: string, placeholder?: string) {
        super();
        this.text = text;
        this.inputType = type;
        this.label = label;
        this.placeholder = placeholder;
    }

    View = () => {
        return <>{this.text}</>
    }

    Edit = () => {
        if (this.inputType === 'input') {
            return (
                <TextField
                    label={this.label}
                    placeholder={this.placeholder}
                    defaultValue={this.text}
                    onChange={(e) => {
                        this.text = e?.target?.value
                    }}
                    size="small"
                />
            )
        } else {
            return (
                <TextField
                    label={this.label}
                    onChange={(e) => {
                        this.text = e?.target?.value
                    }}
                    placeholder={this.placeholder}
                    fullWidth
                    defaultValue={this.text}
                    variant="filled"
                    multiline
                />
            )
        }
    }

    toJSON(): any {
        return this.text
    }
}

export default EditText;