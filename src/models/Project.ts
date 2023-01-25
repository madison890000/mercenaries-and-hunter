import Company from './Company';
import DataModel from './types';
import Base from './Base';
import StringWithID from './StringWithID';
import { v4 } from 'uuid';

interface IProject {
    name: string;
    start: Date;
    end?: Date;
    keywords: string[];
    company: Company;
    achievements: DataModel.IAchievement[];
    descriptions: string[];
    challengeAndSolutions: { challenge: string; solution: string }[];
}

export default class Project extends Base {
    public name: string;
    public start: Date;
    public end?: Date;
    public keywords: StringWithID[];
    public achievements: DataModel.Achievement[];
    public descriptions: StringWithID[];
    public challengeAndSolutions: DataModel.ChallengeAndSolution[];

    constructor({ name, challengeAndSolutions, descriptions, achievements, keywords, start, end }: IProject) {
        super();
        this.name = name;
        this.start = start;
        this.end = end;
        this.descriptions = descriptions.map(d => new StringWithID(d));
        this.achievements = achievements.map(achievement => ({
            id: v4(),
            text: achievement.text,
            categories: achievement.categories.map(e => new StringWithID(e))
        }));
        this.challengeAndSolutions = challengeAndSolutions.map(challengeAndSolution => ({
            id: v4(),
            challenge: challengeAndSolution.challenge,
            solution: challengeAndSolution.solution
        }));
        this.keywords = keywords.map(e => new StringWithID(e));
    }
}
