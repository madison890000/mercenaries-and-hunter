import React from 'react';
import CompanyType from '../CompanyType';
import renderer from 'react-test-renderer';
import DataModel from '../../../models/types';

test('renders CompanyType is Enterprise', () => {
    const CompanyTypeDom = renderer.create(<CompanyType companyType={DataModel.CompanyType.Enterprise} />).toJSON();
    expect(CompanyTypeDom).toMatchSnapshot();
});

test('renders CompanyType is Startup', () => {
    const CompanyTypeDom = renderer.create(<CompanyType companyType={DataModel.CompanyType.Startup} />).toJSON();
    expect(CompanyTypeDom).toMatchSnapshot();
});
