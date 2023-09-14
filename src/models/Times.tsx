import Base from "./Base";
import React from "react";
import {Times as TimesUI} from "./components";
import {DatePicker} from "antd";
import {Dayjs} from "dayjs";


class Times extends Base {
    start: Dayjs;
    end: Dayjs;
    private variant?: "month";

    constructor(start: string = '', end: string | undefined, variant?: 'month') {
        super();
        this.start = this.getDateFromString(start, true)
        this.end = this.getDateFromString(end ?? '', true);
        this.variant = variant;
    }

    View = () => {
        return <TimesUI variant={this.variant} start={this.start} end={this.end}/>
    }

    Edit = () => {
        return (
            <DatePicker.RangePicker
                style={{
                    width: 210,
                }}
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

    toJSON(): any {
        return {
            start: this.start.toJSON(),
            end: this.end.toJSON(),
        }
    }
}

export default Times