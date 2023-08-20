import React, {useContext, useState} from "react";
import {Card, Col, Divider, Row} from "antd";
import copy from 'copy-to-clipboard';
import {TextField} from "@mui/material";
import {useCoverLetter} from "./hooks/useCoverLetter";
import GlobalContext from "./contexts/GlobalContext";
import Button from "./models/components/Button";

const Editor = () => {
    const {person} = useContext(GlobalContext);
    const [job, setJob] = useState<string>();
    const [company, setCompany] = useState<string>();
    const {run, message, loading} = useCoverLetter();
    return (
        <>
            <Row gutter={12} style={{
                marginTop: 20
            }}>
                <Col span={12}>
                    <div>
                        <TextField
                            label="公司名称"
                            defaultValue=""
                            onChange={(e) => {
                                setCompany(e?.target?.value)
                            }}
                            size="small"
                        />
                    </div>
                    <div>
                        <TextField
                            label="岗位要求"
                            onChange={(e) => {
                                setJob(e?.target?.value)
                            }}
                            fullWidth
                            variant="filled"
                            multiline
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{textAlign: 'center', marginBottom: 10}}>
                        <Button loading={loading} type="primary" onClick={() => {
                            company && job && run(JSON.stringify(person.toJSON()), job, company);
                        }}>生成Cover letter</Button>
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