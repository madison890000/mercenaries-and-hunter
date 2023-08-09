import Company from './Company';
import DataModel from './types';
import Base from './Base';
import {v4} from 'uuid';
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
    public keywords: string[];
    public descriptions: string[];
    public achievements: DataModel.IAchievement[];
    public jobSummaries: string[];
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
            categories: achievement.categories
        }));
        this.jobSummaries = jobSummaries
        this.keywords = keywords
        this.descriptions = descriptions
        this.job = {
            position: jobPosition,
            level: jobPositionLevel,
            type: jobType
        };
        this.projects = projects;
    }
}
