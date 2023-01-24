import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import styles from './index.module.scss';
import Achievement from '../../components/Achievement/Achievement';
import Header from './Header';

import capitalize from '../../utils/capitalize';
import pipe from '../../utils/pipe';
import { addPeriodSuffix } from '../../utils/suffix';

import Times from '../../components/Times';
import TimeLineItem from '../../components/TimeLines/TimeLineItem';
import Project from '../../components/Project';

import StringWithID from '../../models/StringWithID';
import DataModel from '../../models/types';
import ProjectModel from '../../models/Project';

interface PeriodProps {
    start: Date;
    periodColor: string;
    end?: Date;
    keywords: StringWithID[];
    descriptions: StringWithID[];
    companyName: string;
    companyIndustry: string;
    companyType: DataModel.CompanyType;
    jobPositionLevel: DataModel.JobPositionLevel;
    jobPosition: DataModel.JobPosition;
    achievements: DataModel.Achievement[];
    jobSummaries: StringWithID[];
    projects?: ProjectModel[];
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
    companyIndustry,
    keywords,
    descriptions,
    jobPositionLevel,
    jobPosition,
    achievements,
    jobSummaries,
    projects
}: PeriodProps) => {
    const intl = useIntl();
    return (
        <>
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
                                companyIndustry={companyIndustry}
                                keywords={keywords}
                                jobPositionLevel={jobPositionLevel}
                            />
                        </div>
                        <div className={styles.time}>
                            <Times start={start} end={end} />
                        </div>
                    </div>
                    <div>
                        {descriptions?.map(description => (
                            <div className={styles.descriptionItem} key={description.id}>
                                {capitalize(description.toString())}
                            </div>
                        ))}
                    </div>
                    <div>
                        <ul
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}
                        >
                            {jobSummaries?.map(summary => (
                                <li
                                    key={summary.id}
                                    style={{
                                        marginRight: '2%',
                                        fontSize: 16
                                    }}
                                >
                                    {pipe<string>(capitalize, addPeriodSuffix)(summary.toString())}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {achievements?.length > 0 && <h5>{intl.formatMessage(messages.achievements)}:</h5>}
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
                    <div className={styles.projects}>
                        {projects?.map(project => (
                            <Project
                                projectName={project.name}
                                start={project.start}
                                end={project.end}
                                keywords={project.keywords}
                                descriptions={project.descriptions}
                                challengeAndSolutions={project.challengeAndSolutions}
                                achievements={project.achievements}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Period;
