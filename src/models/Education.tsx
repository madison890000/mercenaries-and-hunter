import React from "react";
import Base from './Base';
import EditText from './EditText';
import Times from './Times';
import {Tag} from "./components";
import styled from "styled-components";

export interface IEducation {
    college: string;
    major: string;
    degree: string;
    start: string;
    end: string;
}

const EducationUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--base-font-size-middle);
`

class Education extends Base {
    public college: EditText;
    public major: EditText;
    public degree: EditText;
    private times: Times;


    constructor({college, major, degree, start, end}: IEducation) {
        super();
        this.major = new EditText(major).setParent(this);
        this.college = new EditText(college).setParent(this);
        this.degree = new EditText(degree).setParent(this);
        this.times = new Times(start, end).setParent(this);
        this.showName = '教育';
        this.showEditButton = true;
    }

    View = () => {
        const College = this.college.Show;
        const Major = this.major.Show;
        const Degree = this.degree.Show;
        const Times = this.times.Show;
        return (
            <EducationUI>
                <div>
                    <College/>
                </div>
                <div>
                    <Tag type="filled">
                        <Major/>
                    </Tag>
                    <Tag type="less">
                        <Degree/>
                    </Tag>
                </div>
                <Times/>
            </EducationUI>
        )
    }

    Edit = () => {
        const College = this.college.Show;
        const Major = this.major.Show;
        const Degree = this.degree.Show;
        const Times = this.times.Show;
        return (
            <EducationUI>
                <div>
                    <College/>
                </div>
                <div>
                    <Major/>
                    <Degree/>
                </div>
                <Times/>
            </EducationUI>
        )
    }

    toJSON() {
        const json = {
            ...this,
            start: this.times.start,
            end: this.times.end,
        }
        // @ts-ignore
        delete json.times;
        return json
    }
}

export default Education