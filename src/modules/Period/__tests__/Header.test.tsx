import React from 'react';
import Header from '../Header';
import renderer from 'react-test-renderer';
import DataModel from '../../../models/types';
import StringWithID from '../../../models/StringWithID';

test('renders Period Header', () => {
    const testCompanyName = 'test company name';
    const keywords = [new StringWithID('React')];
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
            />
        )
        .toJSON();
    expect(HeaderDom).toMatchSnapshot();
});
