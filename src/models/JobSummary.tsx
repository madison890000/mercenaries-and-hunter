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

class JobSummary extends Base {
    text: EditText;

    constructor(
        text?: string,
    ) {
        super();
        this.text = new EditText(pipe<string>(capitalize, addPeriodSuffix)(text ?? ''), 'textarea', '岗位职责', '请描述岗位职责').setParent(this);
        this.canTranslate = true;
        this.showName = '岗位职责';
        this.showEditButton = true;
    }

    View = () => {
        const Text = this.text.Show;
        return (
            <li>
                <div style={{lineHeight: '24px'}}>
                    <Text/>
                </div>
            </li>
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

export default JobSummary