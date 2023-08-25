import React, {useState} from "react";
import {Card, Col, Divider, Row} from "antd";
import {useMessage} from "./hooks/useMessage";
import copy from 'copy-to-clipboard';
import Button from "./models/components/Button";

const Editor = () => {
    const [data, setData] = useState<string>();
    const {run, message, loading} = useMessage();
    return (
        <>
            <Row gutter={12} style={{
                margin: 12,
            }}>
                <Col span={12} style={{
                    marginTop: 12
                }}>
                    <textarea onChange={(e) => {
                        setData(e?.target?.value)
                    }} placeholder="请输入内容" style={{minWidth: 400}} minLength={200} rows={20}></textarea>
                </Col>
                <Col span={12}>
                    <div style={{textAlign: 'center', marginBottom: 10}}>
                        <Button loading={loading} type="primary" onClick={async () => {
                            data && await run(data);
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