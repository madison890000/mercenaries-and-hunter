import Tag from '../../components/Tag';
import React from 'react';
import DataModel from '../../models/types';

interface CompanyTypeProps {
    companyType: DataModel.CompanyType;
}

const CompanyType = ({ companyType }: CompanyTypeProps) => (
    <span>
        {companyType === DataModel.CompanyType.Enterprise && <Tag type="less">Enterprise</Tag>}
        {companyType === DataModel.CompanyType.Startup && <Tag type="less">Startup</Tag>}
    </span>
);

export default CompanyType;
