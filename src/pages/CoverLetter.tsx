import React, {useContext, useState} from "react";
import {Col, Row} from "antd";
import copy from 'copy-to-clipboard';
import {Card, CardContent, TextField, Typography} from "@mui/material";
import {useCoverLetter} from "../hooks/useCoverLetter";
import GlobalContext from "../contexts/GlobalContext";
import Button from "../models/components/Button";
import LoginWrapper from "../modules/LoginWrapper/LoginWrapper";

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
                            rows={18}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{textAlign: 'center', marginBottom: 10}}>
                        <LoginWrapper>
                            <Button loading={loading} variant="contained" type="primary" onClick={async () => {
                                company && job && await run(person.toResume(), job, company);
                            }}>生成Cover letter</Button>
                        </LoginWrapper>
                    </div>
                    <Card>
                        <CardContent style={{
                            minHeight: 340,
                        }}>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                {message}
                            </Typography>
                        </CardContent>
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
        </>
    )
}

export default Editor