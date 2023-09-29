import React, {useState} from "react";
import {Col, Row} from "antd";
import copy from 'copy-to-clipboard';
import {Card, CardContent, TextField, Typography} from "@mui/material";
import {useCoverLetter} from "../hooks/useCoverLetter";
import Button from "../components/Button";
import LoginWrapper from "../modules/LoginWrapper/LoginWrapper";
import Divider from "../components/Divider";
import {defineMessages, useIntl} from "react-intl";
import globalStore from "../lib/GlobalData";
import {useNavigate} from "react-router";
import {AUTO_CL_COMPANY_NAME, AUTO_CL_JOB_ADDRESS, RESUME_SUMMARY} from "../constants/StoreKeys";


const messages = defineMessages({
    copy: {
        id: 'btn.copy',
    },
    companyName: {
        id: 'cl.company-name',
    },
    jobLink: {
        id: 'cl.job-link',
    },
    btn: {
        id: 'cl.btn',
    },
    uploadBtn: {
        id: 'btn.go-upload-resume',
    }
});
const Editor = () => {
    const [job, setJob] = useState<string>(globalStore.get(AUTO_CL_JOB_ADDRESS));
    const [company, setCompany] = useState<string>(globalStore.get(AUTO_CL_COMPANY_NAME));
    const {run, message, loading} = useCoverLetter();
    const intl = useIntl();
    const navigate = useNavigate();
    // const hasResume = false;
    const hasResume = !!globalStore.get(RESUME_SUMMARY);
    return (
        <>
            <div style={{
                marginTop: 20
            }}>
                <Row gutter={12} align="middle">
                    <Col>
                        <TextField
                            label={intl.formatMessage(messages.companyName)}
                            defaultValue={company}
                            onChange={(e) => {
                                setCompany(e?.target?.value);
                                globalStore.save(AUTO_CL_COMPANY_NAME, e?.target?.value)
                            }}
                            size="small"
                        />
                    </Col>
                    <Col flex="auto">
                        <TextField
                            label={intl.formatMessage(messages.jobLink)}
                            onChange={(e) => {
                                setJob(e?.target?.value);
                                globalStore.save(AUTO_CL_JOB_ADDRESS, e?.target?.value)
                            }}
                            defaultValue={job}
                            fullWidth
                            variant="filled"
                            multiline
                        />
                    </Col>
                    <Col>
                        {
                            hasResume ? (
                                <div style={{textAlign: 'center'}}>
                                    <LoginWrapper>
                                        <Button loading={loading} variant="contained" type="primary"
                                                onClick={async () => {
                                                    company && job && await run(globalStore.get(RESUME_SUMMARY), job, company);
                                                }}>{intl.formatMessage(messages.btn)}</Button>
                                    </LoginWrapper>
                                </div>
                            ) : <LoginWrapper>
                                <Button variant="contained" type="primary" onClick={async () => {
                                    navigate('/import');
                                }}>{intl.formatMessage(messages.uploadBtn)}</Button>
                            </LoginWrapper>
                        }

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
                        >{intl.formatMessage(messages.copy)}</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editor