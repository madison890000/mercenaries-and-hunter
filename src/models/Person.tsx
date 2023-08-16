import React from "react";
import Education from './Education';
import Period from './Period';
import Skill from './Skill';
import Base from './Base';
import BaseInfo from './BaseInfo';
import Description from "./Description";
import ArrayData from "./ArrayData";

interface IPerson {
    firstName: string;
    links?: { name: string; value: string }[];
    lastName: string;
    email: string;
    location: string;
    searchingFor: string;
    cellphone: string;
    descriptions: string[];
    educations?: Education[];
    periods?: Period[];
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
                    searchingFor
                }: IPerson) {
        super();
        this.educations = new ArrayData<Education>([], Education).setParent(this);
        this.periods = new ArrayData<Period>([], Period).setParent(this);
        this.baseInfo = new BaseInfo({
            firstName,
            lastName,
            email,
            cellphone,
            links,
            location,
            searchingFor
        }).setParent(this);
        this.skills = new ArrayData<Skill>([], Skill).setParent(this);
        this.descriptions = new ArrayData<Description>(descriptions?.map(d => new Description(d).setParent(this)), Description).setParent(this);

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

    get reversedPeriods() {
        return [...this.periods.data].reverse();
    }

    viewBaseInfo() {
        return <this.baseInfo.Show/>
    }

    viewDescription() {
        return <this.descriptions.Show/>
    }

    viewSkills() {
        return (
            <div>
                <this.skills.Show/>
            </div>
        )
    }

    viewPeriods() {
        return (
            <section>
                {this.reversedPeriods?.map((period, index) => {
                    return <period.Show/>
                })}
            </section>
        )
    }

    viewEducations() {
        return (
            <section>
                {this.educations?.data?.map(education => <education.Show/>)}
            </section>
        )
    }
}

export default Person