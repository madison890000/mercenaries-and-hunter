import React from "react";
import Base from "./Base";
import EditText from "./EditText";
import styled from "styled-components";
import {addPeriodSuffix, capitalize, pipe} from "../utils";

const DescriptionContainer = styled.div`
  margin-top: var(--block-padding);
`

class Description extends Base {
    private text: EditText;

    constructor(text?: string, type?: 'input' | 'textarea', label?: string, placeholder?: string) {
        super();
        this.text = new EditText(pipe<string>(capitalize, addPeriodSuffix)(text ?? ''), type ?? 'textarea', label, placeholder).setParent(this);
    }

    View = () => {
        return (
            <DescriptionContainer>
                <this.text.Show/>
            </DescriptionContainer>
        )
    }

}

export default Description