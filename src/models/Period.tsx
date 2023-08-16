import React from "react";
import Company from './Company';
import Base from './Base';
import EditText from './EditText';
import Times from './Times';
import Project from './Project';
import Description from "./Description";
import Achievement from "./Achievement";
import styled from "styled-components";
import {Divider, TimeLineItem} from "./components";
import {IAchievement, JobPosition} from "./types";
import Keywords from "./Keywords";
import ArrayData from "./ArrayData";

interface IPeriod {
    start: string;
    end?: string;
    keywords: string[];
    company: Company;
    periodColor?: string;
    jobPosition: JobPosition;
    achievements: IAchievement[];
    jobSummaries: string[];
    projects?: Project[];
    descriptions: string;
}

const Content = styled.div`
  padding: 10px;
  margin: 10px 0;
  border-radius: var(--base-border-radius);
  width: 100%;
`
const PeriodHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const JobTitle = styled.div`
  font-size: var(--base-font-size-large);
`
const Time = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

class Period extends Base {
    public keywords: Keywords;
    public descriptions: Description;
    public achievements: ArrayData<Achievement>;
    public jobSummaries: ArrayData<Description>;
    public company: Company;
    public job: EditText;
    public projects: ArrayData<Project>;
    public periodColor?: string;
    private times: Times;

    constructor({
                    company,
                    jobSummaries,
                    jobPosition,
                    achievements,
                    keywords,
                    descriptions,
                    start,
                    end,
                    periodColor,
                    projects
                }: IPeriod) {
        super();
        this.company = company;
        this.times = new Times(start, end).setParent(this);
        this.achievements = new ArrayData<Achievement>(
            achievements?.map(a => new Achievement(a?.text, a?.categories).setParent(this)),
            Achievement
        ).setParent(this);
        this.jobSummaries = new ArrayData<Description>(
            jobSummaries?.map(d => new Description(d, 'input').setParent(this)),
            Description,
        ).setParent(this);
        this.keywords = new Keywords(keywords).setParent(this);
        this.descriptions = new Description(descriptions, 'textarea', '职位简介').setParent(this)
        this.job = new EditText(jobPosition, 'input', '职位').setParent(this);
        this.projects = new ArrayData<Project>(projects ?? [], Project).setParent(this);
        this.periodColor = periodColor;
    }

    View = () => {
        return (
            <>
                <div style={{display: 'flex'}}>
                    <div style={{marginTop: 30}}>
                        <TimeLineItem start={this.times.start} end={this.times.end} periodColor={'black'}/>
                    </div>
                    <Content>
                        <PeriodHeader>
                            <div style={{display: "flex", alignItems: 'center'}}>
                                <JobTitle>
                                    <div>
                                        <span> <this.job.Show/></span>
                                    </div>
                                    <this.company.Show/>
                                </JobTitle>
                                <Divider variant="v"/>
                                <div>
                                    <this.keywords.Show/>
                                </div>
                            </div>
                            <Time>
                                <this.times.Show/>
                            </Time>
                        </PeriodHeader>
                        <div>
                            <this.descriptions.Show/>
                        </div>
                        <div>
                            <ul>
                                {this.jobSummaries?.data?.map(summary => <li>
                                    <summary.Show/>
                                </li>)}
                            </ul>
                        </div>
                        <div>
                            {this.achievements?.data?.length > 0 && <div>Achievements:</div>}
                            <ul style={{
                                fontSize: 'var(--base-font-size-middle)'
                            }}>
                                <this.achievements.Show/>
                            </ul>
                        </div>
                        <div>
                            <this.projects.Show/>
                        </div>
                    </Content>
                </div>
            </>
        )
    }
}

export default Period
