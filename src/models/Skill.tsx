import Base from './Base';
import EditText from './EditText';
import {Skill as SkillUI} from './components';
import {Importance, SkillLevel} from "./types";
import Name from "./components/Skill/Name";
import React from "react";
import {Slider} from "@mui/material";
import {Col, Row} from "antd";

const MARKS = [
    {
        value: 10,
        label: '10 years',
    },
    {
        value: 20,
        label: '20 years',
    },
];

export interface ISkill {
    name: string;
    ages: number;
    importance: number;
    isHidden?: boolean;
}

class Skill extends Base {
    public name: EditText;
    public importance: Importance;
    public ages: number;

    constructor({ages, name, importance, isHidden}: ISkill) {
        super();
        this.name = new EditText(name, 'input', '技能').setParent(this);
        this.ages = ages;
        this.importance = importance;
        this.canHidden = true;
        this.isHidden = isHidden;
    }

    View = () => {
        return <SkillUI ages={this.ages} importance={this.importance} level={this.level} name={this.name.text}/>
    }

    get level() {
        if (this.ages <= 1) {
            return SkillLevel.understand
        } else if (this.ages > 1 && this.ages <= 3) {
            return SkillLevel.familiar
        } else {
            return SkillLevel.proficient
        }
    }

    Edit = () => {
        const NameShow = this.name.Show;
        return (
            <Row gutter={12}>
                <Col>
                    <Name level={this.importance}>
                        <NameShow/>
                    </Name>
                </Col>
                <Col style={{
                    minWidth: 220,
                }}>
                    <Slider
                        aria-label="Small steps"
                        defaultValue={this.ages}
                        valueLabelDisplay="auto"
                        onChange={(_, value) => {
                            this.ages = value as number
                        }}
                        step={0.5}
                        marks={MARKS}
                        min={0.5}
                        max={20}
                    />
                </Col>
            </Row>
        );
    }
}

export default Skill
