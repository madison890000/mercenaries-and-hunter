import React from "react";
import Education, {IEducation} from './Education';
import Period, {IPeriod} from './Period';
import Skill, {ISkill} from './Skill';
import Base from './Base';
import BaseInfo from './BaseInfo';
import Description from "./Description";
import ArrayData from "./ArrayData";
import {Degree} from "./types";
import {formatAndTranslateResume} from "../service";
import {nonenumerable} from "core-decorators";

interface IPerson {
    firstName: string;
    links?: { name: string; value: string }[];
    lastName: string;
    email: string;
    location: string;
    searchingFor: string;
    cellphone: string;
    descriptions: string[];
    educations?: IEducation[];
    periods?: IPeriod[];
    skills?: ISkill[];
}

class Person extends Base {
    public educations: ArrayData<Education>;
    public periods: ArrayData<Period>;
    public skills: ArrayData<Skill>;
    public descriptions: ArrayData<Description>;
    public baseInfo: BaseInfo;

    constructor({
                    links,
                    firstName,
                    descriptions,
                    lastName,
                    email,
                    cellphone,
                    location,
                    searchingFor,
                    educations,
                    periods,
                    skills
                }: IPerson) {
        super();
        this.educations = new ArrayData<Education>(educations?.map(e => new Education(e)) ?? [], () => new Education({
            college: '',
            major: '',
            degree: Degree.BACHELOR,
            start: '',
            end: ''
        }), false, '编辑教育经历').setParent(this);
        this.periods = new ArrayData<Period>(periods?.map(e => new Period(e)) ?? [], () => new Period({
            achievements: [], descriptions: "", jobPosition: '', jobSummaries: [], keywords: [], start: "",
            company: ''
        }), false, '编辑公司经历').setParent(this);
        this.baseInfo = new BaseInfo({
            firstName,
            lastName,
            email,
            cellphone,
            links,
            location,
            searchingFor
        }).setParent(this);
        this.skills = new ArrayData<Skill>(skills?.map(e => new Skill(e)) ?? [], () => new Skill({
            name: '',
            ages: 1,
            importance: 0
        }), true, '编辑个人技能').setParent(this);
        this.descriptions = new ArrayData<Description>(
            descriptions?.map(d =>
                new Description(
                    d,
                    'textarea',
                    '',
                    '请简单描述您自己的状况',
                    true
                ).setParent(this)), () => new Description('',
                'textarea',
                '',
                '请简单描述您自己的状况',
                true
            ), false, '编辑个人说明').setParent(this);
    }

    @nonenumerable
    onTranslateDescriptions = async () => {
        const data = await formatAndTranslateResume(this.descriptions);
        data?.forEach((d: string, index: number) => {
            this.descriptions.data[index].updateText(d);
        })
    }
    @nonenumerable
    onTranslatePeriods = async () => {
        const data = await formatAndTranslateResume(this.periods?.data?.map((d) => {
            return d?.toTranslate();
        }));
        data?.forEach((d: any, index: number) => {
            this.periods.data[index].updateTranslate(d);
        })
    }

    addEducations(educations: Education[]) {
        this.educations.concat(educations);
    }

    addPeriods(periods: Period[]) {
        this.periods.concat(periods);
    }

    addSkills(skills: Skill[]) {
        this.skills.concat(skills);
    }

    @nonenumerable
    ViewBaseInfo = () => {
        return <this.baseInfo.Show/>
    }
    @nonenumerable
    ViewDescription = () => {
        return <this.descriptions.Show/>
    }
    @nonenumerable
    ViewSkills = () => {
        return (
            <div>
                <this.skills.Show/>
            </div>
        )
    }
    @nonenumerable
    ViewPeriods = () => {
        return <this.periods.Show/>
    }
    @nonenumerable
    ViewEducations = () => {
        return (
            <section>
                <this.educations.Show/>
            </section>
        )
    }

    toJSON() {
        const json = {
            ...this,
            ...this.baseInfo,
        }
        // @ts-ignore
        delete json.baseInfo;
        return json
    }
}

export default Person