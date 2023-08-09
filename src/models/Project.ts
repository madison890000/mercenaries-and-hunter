import Company from './Company';
import DataModel from './types';
import Base from './Base';

interface IProject {
    name: string;
    start: Date;
    end?: Date;
    keywords: string[];
    company: Company;
    achievements: DataModel.IAchievement[];
    descriptions: string[];
    challengeAndSolutions: DataModel.IChallengeAndSolution[];
}

export default class Project extends Base {
    public name: string;
    public start: Date;
    public end?: Date;
    public keywords: string[];
    public achievements: DataModel.IAchievement[];
    public descriptions: string[];
    public challengeAndSolutions: DataModel.IChallengeAndSolution[];

    constructor({ name, challengeAndSolutions, descriptions, achievements, keywords, start, end }: IProject) {
        super();
        this.name = name;
        this.start = start;
        this.end = end;
        this.descriptions = descriptions
        this.achievements = achievements;
        this.challengeAndSolutions = challengeAndSolutions;
        this.keywords = keywords
    }
}
