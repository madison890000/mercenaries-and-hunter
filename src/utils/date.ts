import {MONTH_NUMBER_OF_ONE_YEAR, READABLE_MONTHS} from '../constants/date';
import {Dayjs} from "dayjs";

const translateToReadableMonth = (month: number) => READABLE_MONTHS[month]?.slice(0, 3);

export const formatDate = (time: Dayjs) => {
    return `${translateToReadableMonth(time.month())}, ${time.year()}`;
};

const getFullMonth = (time: Dayjs) => {
    return time.year() * MONTH_NUMBER_OF_ONE_YEAR + time.month();
};

export function findPeriodByDate<T>(time: Dayjs, periods: (T & { start: Dayjs; end?: Dayjs })[]) {
    return periods?.find(p => {
        const notBefore = getFullMonth(p?.start) <= getFullMonth(time);
        const notAfter = getFullMonth(p?.end ?? new Dayjs()) >= getFullMonth(time);
        return notBefore && notAfter;
    });
}

export const getMonthCountFromStartAndEnd = (start: Dayjs, end: Dayjs) => {
    const years = end.year() - start.year();
    if (years) {
        return MONTH_NUMBER_OF_ONE_YEAR - start.month() + (years - 1) * MONTH_NUMBER_OF_ONE_YEAR + end.month();
    }
    return end.month() - start.month();
};
