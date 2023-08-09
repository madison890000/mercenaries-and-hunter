import React from 'react';
import Header from '../Header';
import renderer from 'react-test-renderer';
import DataModel from '../../../models/types';

test('renders Period Header', () => {
    const testCompanyName = 'test company name';
    const keywords = ['React'];
    const jobPositionLevel = DataModel.JobPositionLevel.Senior;
    const jobPosition = 'Software Engineer';
    const HeaderDom = renderer
        .create(
            <Header
                companyType={DataModel.CompanyType.Startup}
                jobPosition={jobPosition}
                jobPositionLevel={jobPositionLevel}
                companyName={testCompanyName}
                keywords={keywords}
                companyIndustry={'tele'}
            />
        )
        .toJSON();
    expect(HeaderDom).toMatchSnapshot();
});
