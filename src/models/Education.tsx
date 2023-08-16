import React from "react";
import Base from './Base';
import EditText from './EditText';
import Times from './Times';
import {Tag} from "./components";
import styled from "styled-components";
import {Degree} from "./types";

interface IEducation {
    college: string;
    major: string;
    degree: Degree;
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
    public degree: Degree;
    private times: Times;


    constructor({college, major, degree, start, end}: IEducation) {
        super();
        this.major = new EditText(major).setParent(this);
        this.college = new EditText(college).setParent(this);
        this.degree = degree;
        this.times = new Times(start, end).setParent(this);
    }

    View = () => {
        return (
            <EducationUI>
                <div>
                    <this.college.Show/>
                </div>
                <div>
                    <Tag type="filled">
                        <this.major.Show/>
                    </Tag>
                    <Tag type="less">{this.degree}</Tag>
                </div>
                <this.times.Show/>
            </EducationUI>
        )
    }

    Edit = () => {
        return (
            <EducationUI>
                <div>
                    <this.college.Show/>
                </div>
                <div>
                    <this.major.Show/>
                    {this.degree}
                </div>
                <this.times.Show/>
            </EducationUI>
        )
    }
}

export default Education