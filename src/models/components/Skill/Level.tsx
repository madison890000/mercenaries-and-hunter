import React from 'react';
import styles from './Level.module.scss';
import classNames from 'classnames';
import { defineMessages, useIntl } from 'react-intl';

namespace Level {
    const messages = defineMessages({
        understand: {
            id: 'component.skill.level.understand',
            defaultMessage: 'Understand'
        },
        familiar: {
            id: 'component.skill.level.familiar',
            defaultMessage: 'Familiar'
        },
        proficient: {
            id: 'component.skill.level.proficient',
            defaultMessage: 'Proficient'
        }
    });
    export const Understand = () => {
        const intl = useIntl();
        return (
            <div className={classNames(styles.level)}>
                <span />
                <span className={styles.empty} />
                <span className={styles.empty} />
                <span className={styles.empty} />
                <span className={styles.empty} />
                <div className={styles.levelName}>{intl.formatMessage(messages.understand)}</div>
            </div>
        );
    };

    export const Familiar = () => {
        const intl = useIntl();
        return (
            <div className={classNames(styles.level)}>
                <span />
                <span />
                <span />
                <span className={styles.empty} />
                <span className={styles.empty} />
                <div className={styles.levelName}>{intl.formatMessage(messages.familiar)}</div>
            </div>
        );
    };

    export const Proficient = () => {
        const intl = useIntl();
        return (
            <div className={classNames(styles.level)}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <div className={styles.levelName}>{intl.formatMessage(messages.proficient)}</div>
            </div>
        );
    };
}
export default Level;
