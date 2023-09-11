import React, {useContext, useState} from "react";
import {Col, Row} from "antd";
import copy from 'copy-to-clipboard';
import {Card, CardContent, TextField, Typography} from "@mui/material";
import {useCoverLetter} from "../hooks/useCoverLetter";
import GlobalContext from "../contexts/GlobalContext";
import Button from "../models/components/Button";
import LoginWrapper from "../modules/LoginWrapper/LoginWrapper";
import {Divider} from "../models/components";

const Editor = () => {
    const {person} = useContext(GlobalContext);
    const [job, setJob] = useState<string>();
    const [company, setCompany] = useState<string>();
    const {run, message, loading} = useCoverLetter();
    return (
        <>
            <div style={{
                marginTop: 20
            }}>
                <Row gutter={12} align="middle">
                    <Col>
                        <TextField
                            label="公司名称"
                            defaultValue=""
                            onChange={(e) => {
                                setCompany(e?.target?.value)
                            }}
                            size="small"
                        />
                    </Col>
                    <Col flex="auto">
                        <TextField
                            label="岗位地址"
                            onChange={(e) => {
                                setJob(e?.target?.value)
                            }}
                            fullWidth
                            variant="filled"
                            multiline
                        />
                    </Col>
                    <Col>
                        <div style={{textAlign: 'center'}}>
                            <LoginWrapper>
                                <Button loading={loading} variant="contained" type="primary" onClick={async () => {
                                    company && job && await run(person.toResume(), job, company);
                                }}>生成Cover letter</Button>
                            </LoginWrapper>
                        </div>
                    </Col>
                </Row>
                <div>

                    <Divider/>
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
                </div>
            </div>
        </>
    )
}

export default Editor