import React, {useMemo} from 'react';
import {getMonthCountFromStartAndEnd} from '../../../utils/date';
import MonthRect from './MonthRect';
import {ScreenDevice} from '../../../utils/device';
import {BASE_MONTH_SVG_HEIGHT, BASE_RECT_WIDTH, RECT_GAP} from '../../../constants/widths';
import {Dayjs} from "dayjs";

export const getBaseRectFull = (device: ScreenDevice) => {
    switch (device) {
        case ScreenDevice.A4:
            return BASE_RECT_WIDTH - 2;
        case ScreenDevice.Mobile:
            return BASE_RECT_WIDTH - 4;
        case ScreenDevice.PC:
            return BASE_RECT_WIDTH;
        default:
            return BASE_RECT_WIDTH;
    }
};

const TimeLineItem = ({start, end, periodColor}: { start: Dayjs; end?: Dayjs; periodColor: string }) => {
    const {totalRects, rects} = useMemo(() => {
        const totalRects = getMonthCountFromStartAndEnd(start, end ?? new Dayjs()) + 1;
        let rects = new Array(totalRects).fill(0);
        return {
            totalRects,
            rects
        };
    }, [start, end]);
    return (
        <svg width={BASE_MONTH_SVG_HEIGHT} height={(10 + 1) * totalRects}>
            <g>
                {rects?.map((e, index) => (
                    <MonthRect variant="v" key={index} width={10} gap={RECT_GAP} color={periodColor} index={index}/>
                ))}
            </g>
        </svg>
    );
};

export default TimeLineItem;
