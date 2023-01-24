import Period from '../Period';
import DataModel from '../types';
import Company from '../Company';

describe('Period class', () => {
    test('period should have basic properties', () => {
        const testCompanyName = 'test company name';
        const testCompany = new Company({
            name: testCompanyName,
            type: DataModel.CompanyType.Startup
        });
        const start = new Date('2012-01-01');
        const end = new Date('2013-01-01');
        const keywords = ['React'];
        const jobPositionLevel = DataModel.JobPositionLevel.Senior;
        const jobPosition = 'Software Engineer';
        const achievements = [] as DataModel.IAchievement[];
        const jobSummaries = [] as string[];
        const testPeriod = new Period({
            solutionsOfHowToImplement: [],
            company: testCompany,
            jobSummaries,
            jobPositionLevel,
            jobPosition,
            achievements,
            start,
            end,
            keywords
        });
        expect(testPeriod.company).toEqual(testCompany);
        expect(testPeriod.start).toEqual(start);
        expect(testPeriod.end).toEqual(end);
        expect(testPeriod.keywords.map(e => e.toString())).toEqual(keywords);
        expect(testPeriod.achievements).toEqual(achievements);
        expect(testPeriod.job.position).toEqual(jobPosition);
        expect(testPeriod.job.level).toEqual(jobPositionLevel);
        expect(testPeriod.jobSummaries).toEqual(jobSummaries);
    });
});
