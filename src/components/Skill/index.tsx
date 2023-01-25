import React from 'react';
import styles from './index.module.scss';
import DataModel from '../../models/types';
import Name from './Name';
import Level from './Level';
import { defineMessages, useIntl } from 'react-intl';

interface SkillProps {
    name: string;
    level: DataModel.SkillLevel;
    ages: number;
    importance: DataModel.Importance;
    size?: 'small';
}

const messages = defineMessages({
    years: {
        id: 'component.skill.years',
        defaultMessage: 'years'
    }
});
const Skill = ({ size, level, name, ages, importance }: SkillProps) => {
    const intl = useIntl();
    return (
        <div
            className={styles.skill}
            style={
                size === 'small'
                    ? {
                          transform: 'scale(0.8)',
                          transformOrigin: 'left',
                          width: '23%'
                      }
                    : {}
            }
        >
            <div>
                <Name level={importance}>{name}</Name>
                <div className={styles.subTitle}>
                    {ages} {intl.formatMessage(messages.years)}
                </div>
            </div>
            {level === DataModel.SkillLevel.familiar && <Level.Familiar />}
            {level === DataModel.SkillLevel.proficient && <Level.Proficient />}
            {level === DataModel.SkillLevel.understand && <Level.Understand />}
        </div>
    );
};

export default Skill;
