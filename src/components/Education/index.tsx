import React from 'react';
import styles from './index.module.scss';
import DataModel from '../../models/types';
import Times from '../Times';
import Tag from "../Tag";

interface EducationProps {
    college: string;
    degree: DataModel.Degree;
    major: string;
    start: Date;
    end: Date;
}

const Education = ({start, end, college, degree, major}: EducationProps) => {
    return (
        <div className={styles.education}>
            <div>
                <span>{college}</span>
            </div>
            <div>
                <Tag type="filled">{major}</Tag>
                <Tag type="less">{degree}</Tag>
            </div>
            <Times start={start} end={end}/>
        </div>
    );
};

export default Education;
