import Base from "./Base";
import {Tag} from "./components";
import React from "react";
import {Select} from "antd";


class Keywords extends Base {
    private data: string[];

    constructor(data: string[] = []) {
        super();
        this.data = data;
    }

    View = () => {
        return (
            <>
                {
                    this.data?.map(keyword => (
                        <Tag type="filled" key={keyword}>
                            {keyword}
                        </Tag>
                    ))
                }
            </>
        )
    }

    Edit = () => {
        return (
            <div style={{
                display: 'inline-block',
            }}>
                <Select
                    style={{
                        minWidth: 350,
                        fontSize: 'var(--base-font-size-middle)'
                    }}
                    defaultValue={this.data}
                    onChange={(e) => {
                        this.data = e
                    }}
                    mode="tags"
                />
            </div>
        );
    }

    toJSON() {
        return this.data
    }
}

export default Keywords