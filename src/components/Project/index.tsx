import styles from './index.module.scss';
import Times from '../Times';
import React from 'react';
import StringWithID from '../../models/StringWithID';
import Tag from '../Tag';
import Achievement from '../Achievement/Achievement';
import { defineMessages, useIntl } from 'react-intl';
import DataModel from '../../models/types';
import ChallengeAndSolution from './ChallengeAndSolution';
import { Divider } from '../index';

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

interface ProjectProps {
    projectName: string;
    start: Date;
    end?: Date;
    keywords: StringWithID[];
    descriptions: StringWithID[];
    challengeAndSolutions: DataModel.ChallengeAndSolution[];
    achievements: DataModel.Achievement[];
}

const Project = ({
    projectName,
    descriptions,
    achievements,
    challengeAndSolutions,
    keywords,
    start,
    end
}: ProjectProps) => {
    const intl = useIntl();
    const hasAchievements = achievements?.length > 0;
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div>
                    <span className={styles.name}>{projectName}</span>
                    <span>
                        {keywords?.map(keyword => (
                            <Tag type="filled" key={keyword.id}>
                                {keyword.toString()}
                            </Tag>
                        ))}
                    </span>
                </div>
                <div>
                    <Times variant="month" start={start} end={end} />
                </div>
            </div>
            <div className={styles.descriptions}>
                {descriptions?.map(d => (
                    <div>{d?.toString()}</div>
                ))}
            </div>
            <div>
                <ul className={styles.challengeAndSolutions}>
                    {challengeAndSolutions?.map(challengeAndSolution => (
                        <ChallengeAndSolution
                            key={challengeAndSolution.id}
                            challenge={challengeAndSolution?.challenge}
                            solution={challengeAndSolution?.solution}
                        />
                    ))}
                </ul>
            </div>
            {hasAchievements && (
                <>
                    <Divider />
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
                </>
            )}
        </div>
    );
};

export default Project;
