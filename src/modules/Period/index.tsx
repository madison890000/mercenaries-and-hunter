import React from 'react';
import {defineMessages, useIntl} from 'react-intl';

import styles from './index.module.scss';
import Achievement from '../../components/Achievement/Achievement';
import Header from './Header';

import capitalize from '../../utils/capitalize';
import pipe from '../../utils/pipe';
import {addPeriodSuffix} from '../../utils/suffix';

import Times from '../../components/Times';
import TimeLineItem from '../../components/TimeLines/TimeLineItem';
import Project from '../../components/Project';

import DataModel from '../../models/types';
import ProjectModel from '../../models/Project';

interface PeriodProps {
    start: Date;
    periodColor: string;
    end?: Date;
    keywords: string[];
    descriptions: string[];
    companyName: string;
    companyIndustry: string;
    companyType: DataModel.CompanyType;
    jobPositionLevel: DataModel.JobPositionLevel;
    jobPosition: DataModel.JobPosition;
    achievements: DataModel.IAchievement[];
    jobSummaries: string[];
    projects?: Omit<ProjectModel, 'id'>[];
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
                    <TimeLineItem start={start} end={end} periodColor={periodColor}/>
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
                            <Times start={start} end={end}/>
                        </div>
                    </div>
                    <div>
                        {descriptions?.map(description => (
                            <div className={styles.descriptionItem} key={description}>
                                {capitalize(description.toString())}
                            </div>
                        ))}
                    </div>
                    <div>
                        <ul>
                            {jobSummaries?.map(summary => (
                                <li
                                    key={summary}
                                    style={{
                                        marginRight: '2%',
                                        fontSize: 'var(--base-font-size-large-2)',
                                    }}
                                >
                                    {pipe<string>(capitalize, addPeriodSuffix)(summary.toString())}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {achievements?.length > 0 && <div style={{
                            fontWeight: "bold",
                            fontSize: 'var(--base-font-size-middle)'
                        }}>{intl.formatMessage(messages.achievements)}:</div>}
                        <ul className={styles.achievements}>
                            {achievements?.map(achievement => (
                                <Achievement
                                    key={achievement.text}
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
