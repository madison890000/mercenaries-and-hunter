import React from "react";
import Base from "./Base";
import EditText from "./EditText";
import styled from "styled-components";
import {addPeriodSuffix, capitalize, pipe} from "../utils";
import {nonenumerable} from "core-decorators";
import {formatAndTranslateResume} from "../service";

const DescriptionContainer = styled.div`
  margin-top: var(--block-padding);
`

class Description extends Base {
    text: EditText;

    constructor(
        text?: string,
        type?: 'input' | 'textarea',
        label?: string,
        placeholder?: string,
        canTranslate?: boolean,
        showEditButton?: boolean,
    ) {
        super();
        this.text = new EditText(pipe<string>(capitalize, addPeriodSuffix)(text ?? ''), type ?? 'textarea', label, placeholder).setParent(this);
        this.canTranslate = canTranslate ?? false;
        this.showName = '段落';
        this.showEditButton = showEditButton ?? false;
    }

    View = () => {
        const Text = this.text.Show;
        return (
            <DescriptionContainer>
                <Text/>
            </DescriptionContainer>
        )
    }

    toJSON(): any {
        return this.text.toJSON()
    }

    @nonenumerable
    onTranslate = async () => {
        const data = await formatAndTranslateResume(this.toTranslate());
        this.updateTranslate(data)
    }

    toTranslate() {
        return {
            text: this.text.text,
        }
    }

    updateTranslate(d: any) {
        this.text.text = d?.text;
        this.emit('value-change')
    }

    updateText(d: string) {
        this.text.text = d;
        this.emit('value-change')
    }
}

export default Description