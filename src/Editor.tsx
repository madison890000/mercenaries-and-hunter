import React, {useState} from "react";
import {Button, Card, Col, Divider, Row} from "antd";
import {useMessage} from "./hooks/useMessage";
import copy from 'copy-to-clipboard';

const Editor = () => {
    const [data, setData] = useState<string>();
    const {run, message} = useMessage();
    return (
        <>
            <Row>
                <Col span={12}>
                    <textarea onChange={(e) => {
                        setData(e?.target?.value)
                    }} placeholder="请输入内容" style={{minWidth: 400}} minLength={200} rows={20}></textarea>
                </Col>
                <Col span={12}>
                    <div style={{textAlign: 'center', marginBottom: 10}}>
                        <Button type="primary" onClick={() => {
                            data && run(data);
                        }}>一键翻译并修改语法和语气</Button>
                    </div>
                    <Card>
                        {message}
                    </Card>
                    <div>
                        <Button
                            type="primary"
                            onClick={() => {
                                copy(message);
                            }}
                        >复制</Button>
                    </div>
                </Col>
            </Row>
            <Divider></Divider>
        </>
    )
}

export default Editor