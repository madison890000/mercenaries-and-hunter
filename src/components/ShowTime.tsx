const ONE_MIN = 1000 * 60
const ONE_HOUR = ONE_MIN * 60
const ONE_DAY = ONE_HOUR * 24
const SEVEN_DAY = ONE_DAY * 7
const ONE_MONTH = ONE_DAY * 31

const timeUntilNow = (time: string) => {
    const now = Date.now();
    const timeSeconds = now - new Date(time).getTime();
    if (timeSeconds < ONE_MIN) {
        return '刚刚'
    }
    if (timeSeconds < ONE_MIN * 5) {
        return '5分钟内'
    }
    if (timeSeconds < ONE_MIN * 30) {
        return '半小时内'
    }
    if (timeSeconds < ONE_HOUR) {
        return '1小时内'
    }
    if (timeSeconds < ONE_HOUR * 2) {
        return '2小时内'
    }
    if (timeSeconds < ONE_HOUR * 6) {
        return '6小时内'
    }
    if (timeSeconds < ONE_HOUR * 12) {
        return '12小时内'
    }
    if (timeSeconds < ONE_DAY) {
        return '1天内'
    }
    if (timeSeconds < SEVEN_DAY) {
        return '1周内'
    }
    if (timeSeconds < ONE_MONTH) {
        return '1月内'
    }
    return '-'
}
const ShowTimeUntilNow: React.FC<{ time: string }> = ({time}) => <span
    style={{
        color: 'gray',
        fontSize: '12px',
        fontStyle: 'italic'
    }}>{timeUntilNow(time)}</span>
export default ShowTimeUntilNow
