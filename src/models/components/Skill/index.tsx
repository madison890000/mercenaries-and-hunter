import React from 'react';
import styles from './index.module.scss';
import Name from './Name';
import Level from './Level';
import {defineMessages, useIntl} from 'react-intl';
import {Importance, SkillLevel} from "../../types";

interface SkillProps {
    name: string;
    level: SkillLevel;
    ages: number;
    importance: Importance;
}

const messages = defineMessages({
    years: {
        id: 'component.skill.years',
        defaultMessage: 'years'
    }
});
const Skill = ({level, name, ages, importance}: SkillProps) => {
    const intl = useIntl();
    return (
        <div
            className={styles.skill}
        >
            <div>
                <Name level={importance}>{name}</Name>
                <div className={styles.subTitle}>
                    {ages} {intl.formatMessage(messages.years)}
                </div>
            </div>
            {level === SkillLevel.familiar && <Level.Familiar/>}
            {level === SkillLevel.proficient && <Level.Proficient/>}
            {level === SkillLevel.understand && <Level.Understand/>}
        </div>
    );
};

export default Skill;
