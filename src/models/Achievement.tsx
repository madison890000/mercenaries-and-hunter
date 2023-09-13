import React from "react";
import Base from "./Base";
import EditText from "./EditText";

import {addPeriodSuffix, capitalize, pipe} from "../utils";
import Keywords from "./Keywords";

class Achievement extends Base {
    private categories: Keywords;
    text: EditText;

    constructor(text: string = '', categories: string[] = [], isHidden?: boolean) {
        super();
        this.text = new EditText(pipe<string>(capitalize, addPeriodSuffix)(text), 'input', '成就').setParent(this);
        this.categories = new Keywords(categories).setParent(this);
        this.showName = '成就';
        this.showEditButton = true;
        this.canHidden = true;
        this.isHidden = isHidden;
    }

    View = () => {
        const Text = this.text.Show;
        const Categories = this.categories.Show;
        return (
            <li>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Text/>
                    <span style={{
                        marginLeft: 12,
                    }}>
                        <Categories/>
                    </span>
                </div>
            </li>
        )
    }

    updateTranslate(achievement: any) {
        this.text.text = achievement.text;
    }
}

export default Achievement