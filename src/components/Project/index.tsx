import styles from './index.module.scss';
import Times from '../Times';
import React from 'react';
import Tag from '../Tag';
import Achievement from '../Achievement/Achievement';
import {defineMessages, useIntl} from 'react-intl';
import DataModel from '../../models/types';
import ChallengeAndSolution from './ChallengeAndSolution';

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
    keywords: string[];
    descriptions: string[];
    challengeAndSolutions: DataModel.IChallengeAndSolution[];
    achievements: DataModel.IAchievement[];
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
                    <span
                        style={{
                            fontSize: 22,
                            marginLeft: 10
                        }}
                    >
                        {keywords?.map(keyword => (
                            <Tag type="filled" key={keyword}>
                                {keyword.toString()}
                            </Tag>
                        ))}
                    </span>
                </div>
                <div>
                    <Times variant="month" start={start} end={end}/>
                </div>
            </div>
            <div className={styles.descriptions}>
                {descriptions?.map(d => (
                    <div>{d?.toString()}</div>
                ))}
            </div>
            <div>
                <ul>
                    {challengeAndSolutions?.map(challengeAndSolution => (
                        <ChallengeAndSolution
                            key={challengeAndSolution.challenge}
                            challenge={challengeAndSolution?.challenge}
                            solution={challengeAndSolution?.solution}
                        />
                    ))}
                </ul>
            </div>
            {hasAchievements && (
                <>
                    <div>
                        <div style={{
                            fontWeight: "bold",
                            fontSize: 'var(--base-font-size-middle)'
                        }}>{intl.formatMessage(messages.achievements)}:
                        </div>
                        <ul style={{
                            fontSize: 'var(--base-font-size-middle)',
                        }}>
                            {achievements?.map(achievement => (
                                <Achievement
                                    key={achievement?.text}
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
