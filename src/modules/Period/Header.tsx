import Tag from '../../components/Tag';
import React from 'react';
import DataModel from '../../models/types';
import styles from './Header.module.scss';
import capitalize from '../../utils/capitalize';
import Divider from '../../components/Divider';

interface HeaderProps {
    keywords: string[];
    jobPositionLevel: DataModel.JobPositionLevel;
    jobPosition: DataModel.JobPosition;
    companyName: string;
    companyIndustry: string;
    companyType: DataModel.CompanyType;
}

const Header = ({keywords, companyName, companyIndustry, jobPosition, jobPositionLevel}: HeaderProps) => (
    <div className={styles.header}>
        <div>
            <div className={styles.job}>
                {jobPositionLevel && <span>{capitalize(jobPositionLevel.toLowerCase())}</span>}
                <span>{jobPosition}</span>
            </div>
            <div className={styles.companyName}>
                <div>{companyName}</div>
                {/*<div className={styles.companyIndustry}>({capitalize(companyIndustry)})</div>*/}
            </div>
        </div>
        <Divider variant="v"/>
        <div style={{
            fontSize: 24
        }}>
            {keywords?.map(keyword => (
                <Tag type="filled" key={keyword}>
                    {keyword.toString()}
                </Tag>
            ))}
        </div>
    </div>
);

export default Header;
