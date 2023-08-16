import Base from "./Base";
import React from "react";
import {Times as TimesUI} from "./components";
import {DatePicker} from "antd";
import {Dayjs} from "dayjs";


class Times extends Base {
    start: Dayjs;
    end: Dayjs;

    constructor(start: string = '', end: string | undefined) {
        super();
        this.start = this.getDateFromString(start, true)
        this.end = this.getDateFromString(end ?? '', true);
    }

    View = () => {
        return <TimesUI start={this.start} end={this.end}/>
    }

    Edit = () => {
        return (
            <DatePicker.RangePicker
                picker="month"
                defaultValue={[
                    this.start,
                    this.end
                ]}
                onChange={(e) => {
                    if (e) {
                        this.start = e?.[0] as Dayjs;
                        this.end = e?.[1] as Dayjs;
                    }
                }}
            />
        )
    }
}

export default Times