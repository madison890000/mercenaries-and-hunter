import Base from "./Base";
import {TextField} from "@mui/material";
import React from "react";

class EditText extends Base {
    public text?: string | undefined;
    private inputType: "input" | "textarea";
    private label?: string;
    private placeholder: string | undefined;
    private variant: 'standard' | 'outlined' | undefined;

    constructor(text: string, type: 'input' | 'textarea' = 'input', label?: string, placeholder?: string, variant?: 'standard' | 'outlined') {
        super();
        this.text = text;
        this.inputType = type;
        this.label = label;
        this.placeholder = placeholder;
        this.variant = variant;
    }

    View = () => {
        return <>{this.text}</>
    }

    Edit = () => {
        if (this.inputType === 'input') {
            return (
                <TextField
                    // label={this.label}
                    placeholder={this.placeholder}
                    defaultValue={this.text}
                    onChange={(e) => {
                        this.text = e?.target?.value
                    }}
                    variant={this.variant}
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