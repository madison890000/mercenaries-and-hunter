import {formatDate, getMonthCountFromStartAndEnd} from '../../../utils/date';
import React from 'react';
import styles from './index.module.scss';
import {Dayjs} from "dayjs";

interface TimesProps {
    start: Dayjs;
    end?: Dayjs;
    variant?: 'month';
}

const Times = ({variant, start, end}: TimesProps) => {
    if (variant === 'month') {
        return (
            <div className={styles.times}>
                <span>{getMonthCountFromStartAndEnd(start, end ?? new Dayjs())} Months</span>
            </div>
        );
    }

    return (
        <div className={styles.times}>
            <span>{formatDate(start)}</span>
            <span className={styles.divider}></span>
            <span>{end ? formatDate(end) : 'Present'}</span>
        </div>
    );
};

export default Times;
