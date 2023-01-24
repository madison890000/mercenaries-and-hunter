import React from 'react';
import styles from './index.module.scss';
import DataModel from '../../models/types';
import Times from '../Times';
import Achievement from './Achievement';
import { defineMessages, useIntl } from 'react-intl';
import Header from './Header';
import StringWithID from '../../models/StringWithID';
import capitalize from '../../utils/capitalize';
import pipe from '../../utils/pipe';
import { addPeriodSuffix } from '../../utils/suffix';
import TimeLineItem from '../TimeLines/TimeLineItem';

interface PeriodProps {
    start: Date;
    periodColor: string;
    end?: Date;
    keywords: StringWithID[];
    companyName: string;
    companyType: DataModel.CompanyType;
    jobPositionLevel: DataModel.JobPositionLevel;
    jobPosition: DataModel.JobPosition;
    achievements: DataModel.Achievement[];
    jobSummaries: StringWithID[];
}

const messages = defineMessages({
    jobSummaries: {
        id: 'component.period.jobSummaries',
        defaultMessage: 'Job summaries'
    },
    achievements: {
        id: 'component.period.achievements',
        defaultMessage: 'Achievements'
    }
});
const Period = ({
    start,
    periodColor,
    end,
    companyName,
    companyType,
    keywords,
    jobPositionLevel,
    jobPosition,
    achievements,
    jobSummaries
}: PeriodProps) => {
    const intl = useIntl();
    return (
        <div className={styles.periodContainer}>
            <div className={styles.timeline}>
                <TimeLineItem start={start} end={end} periodColor={periodColor} />
            </div>
            <div className={styles.content}>
                <div className={styles.period}>
                    <div>
                        <Header
                            jobPosition={jobPosition}
                            companyName={companyName}
                            companyType={companyType}
                            keywords={keywords}
                            jobPositionLevel={jobPositionLevel}
                        />
                    </div>
                    <div className={styles.time}>
                        <Times start={start} end={end} />
                    </div>
                </div>

                <div>
                    <h5>{intl.formatMessage(messages.jobSummaries)}:</h5>
                    <ul>
                        {jobSummaries?.map(summary => (
                            <li key={summary.id}>{pipe<string>(capitalize, addPeriodSuffix)(summary.toString())}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5>{intl.formatMessage(messages.achievements)}:</h5>
                    <ul className={styles.achievements}>
                        {achievements?.map(achievement => (
                            <Achievement
                                key={achievement.id}
                                title={achievement?.text}
                                categories={achievement?.categories}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Period;
