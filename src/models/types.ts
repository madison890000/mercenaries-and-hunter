
namespace DataModel {
    export enum Degree {
        BACHELOR = 'BACHELOR',
        MASTER = 'MASTER',
        PhD = 'PHD'
    }

    export type Gender = 'MALE' | 'FEMALE';

    export type IAchievement = {
        text: string;
        categories: string[];
    };
    export type SolutionsOfHowToImplement = string;

    export enum JobPositionLevel {
        Staff = 'STAFF',
        Senior = 'SENIOR',
        Middle = '',
        Junior = 'JUNIOR'
    }

    export enum JobType {
        FullTime = 'FULLTIME',
        PartTime = 'PARTTIME',
        Contract = 'CONTRACT'
    }

    export type JobPosition = 'Software Engineer' | 'Front-End Engineer' | 'Back-End Engineer' | 'Full-Stack Engineer';

    export type Job = {
        position: JobPosition;
        level: JobPositionLevel;
        type: JobType;
    };

    export enum SkillLevel {
        understand = 'UNDERSTAND',
        familiar = 'FAMILIAR',
        proficient = 'PROFICIENT'
    }

    export enum Importance {
        Essential,
        Advanced
    }

    export enum CompanyType {
        Enterprise,
        Startup
    }

    export type RelatedLink = {
        name: string;
        value: string;
    };
    export type IChallengeAndSolution = {
        challenge: string;
        solution: string;
    };
}
export default DataModel;
