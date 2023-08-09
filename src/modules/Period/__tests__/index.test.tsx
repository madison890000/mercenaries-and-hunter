import React from 'react';
import Period from '../index';
import renderer from 'react-test-renderer';
import DataModel from '../../../models/types';

test('renders Period', () => {
    const testCompanyName = 'test company name';
    const start = new Date('2012-01-01');
    const end = new Date('2013-01-01');
    const keywords = ['React'];
    const jobPositionLevel = DataModel.JobPositionLevel.Senior;
    const jobPosition = 'Software Engineer';
    const achievements = [] as DataModel.IAchievement[];
    const jobSummaries = [] as string[];
    const PeriodDom = renderer
        .create(
            <Period
                start={start}
                end={end}
                companyType={DataModel.CompanyType.Startup}
                keywords={keywords}
                jobPositionLevel={jobPositionLevel}
                jobPosition={jobPosition}
                achievements={achievements}
                jobSummaries={jobSummaries}
                companyName={testCompanyName}
                periodColor={'red'}
                companyIndustry={'tele'}
                descriptions={[]}/>
        )
        .toJSON();
    expect(PeriodDom).toMatchSnapshot();
});
