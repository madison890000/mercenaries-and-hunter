import Company from './Company';
import DataModel from './types';
import Base from './Base';
import StringWithID from './StringWithID';
import { v4 } from 'uuid';
import Project from './Project';

interface IPeriod {
    start: Date;
    end?: Date;
    keywords: string[];
    company: Company;
    jobPositionLevel: DataModel.JobPositionLevel;
    jobPosition: DataModel.JobPosition;
    achievements: DataModel.IAchievement[];
    jobSummaries: string[];
    jobType: DataModel.JobType;
    projects?: Project[];
    descriptions: string[];
}

export default class Period extends Base {
    public start: Date;
    public end?: Date;
    public keywords: StringWithID[];
    public descriptions: StringWithID[];
    public achievements: DataModel.Achievement[];
    public jobSummaries: StringWithID[];
    public company: Company;
    public job: DataModel.Job;
    public projects?: Project[];

    constructor({
        company,
        jobSummaries,
        jobPosition,
        jobPositionLevel,
        achievements,
        keywords,
        descriptions,
        start,
        end,
        jobType,
        projects
    }: IPeriod) {
        super();
        this.company = company;
        this.start = start;
        this.end = end;
        this.achievements = achievements.map(achievement => ({
            id: v4(),
            text: achievement.text,
            categories: achievement.categories.map(e => new StringWithID(e))
        }));
        this.jobSummaries = jobSummaries.map(e => new StringWithID(e));
        this.keywords = keywords.map(e => new StringWithID(e));
        this.descriptions = descriptions?.map(e => new StringWithID(e));
        this.job = {
            position: jobPosition,
            level: jobPositionLevel,
            type: jobType
        };
        this.projects = projects;
    }
}
