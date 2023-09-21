import {defineMessages, useIntl} from "react-intl";

const ONE_MIN = 1000 * 60
const ONE_HOUR = ONE_MIN * 60
const ONE_DAY = ONE_HOUR * 24
const SEVEN_DAY = ONE_DAY * 7
const ONE_MONTH = ONE_DAY * 31

const messages = defineMessages({
    now: {
        id: 'time.now',
    },
    min5: {
        id: 'time.5mins',
    },
    min30: {
        id: 'time.half-hour',
    },
    min60: {
        id: 'time.one-hour',
    },
    hour2: {
        id: 'time.two-hour',
    },
    hour6: {
        id: 'time.six-hour',
    },
    hour12: {
        id: 'time.half-day',
    },
    hour24: {
        id: 'time.one-day',
    },
    day7: {
        id: 'time.one-week',
    },
    day31: {
        id: 'time.one-mouth',
    },
});
const TimeUntilNow: React.FC<{ time: string }> = ({time}) => {
    const now = Date.now();
    const timeSeconds = now - new Date(time).getTime();
    const intl = useIntl();
    let text = '-';
    if (timeSeconds < ONE_MIN) {
        text = intl.formatMessage(messages.now)
    }else if (timeSeconds < ONE_MIN * 5) {
        text = intl.formatMessage(messages.min5)
    }else if (timeSeconds < ONE_MIN * 30) {
        text = intl.formatMessage(messages.min30)
    }else if (timeSeconds < ONE_HOUR) {
        text = intl.formatMessage(messages.min60)
    }else if (timeSeconds < ONE_HOUR * 2) {
        text = intl.formatMessage(messages.hour2)
    }else if (timeSeconds < ONE_HOUR * 6) {
        text = intl.formatMessage(messages.hour6)
    }else if (timeSeconds < ONE_HOUR * 12) {
        text = intl.formatMessage(messages.hour12)
    }else if (timeSeconds < ONE_DAY) {
        text = intl.formatMessage(messages.hour24)
    }else if (timeSeconds < SEVEN_DAY) {
        text = intl.formatMessage(messages.day7)
    }else if (timeSeconds < ONE_MONTH) {
        text = intl.formatMessage(messages.day31)
    }
    return <>{text}</>
}
const ShowTimeUntilNow: React.FC<{ time: string }> = ({time}) => <span
    style={{
        color: 'gray',
        fontSize: '12px',
        fontStyle: 'italic'
    }}><TimeUntilNow time={time}/></span>
export default ShowTimeUntilNow
