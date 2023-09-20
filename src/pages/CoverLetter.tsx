import React, {useContext, useState} from "react";
import {Col, Row} from "antd";
import copy from 'copy-to-clipboard';
import {Card, CardContent, TextField, Typography} from "@mui/material";
import {useCoverLetter} from "../hooks/useCoverLetter";
import GlobalContext from "../contexts/GlobalContext";
import Button from "../models/components/Button";
import LoginWrapper from "../modules/LoginWrapper/LoginWrapper";
import {Divider} from "../models/components";
import {defineMessages, useIntl} from "react-intl";


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
    }
});
const Editor = () => {
    const {person} = useContext(GlobalContext);
    const [job, setJob] = useState<string>();
    const [company, setCompany] = useState<string>();
    const {run, message, loading} = useCoverLetter();
    const intl = useIntl();
    return (
        <>
            <div style={{
                marginTop: 20
            }}>
                <Row gutter={12} align="middle">
                    <Col>
                        <TextField
                            label={intl.formatMessage(messages.companyName)}
                            defaultValue=""
                            onChange={(e) => {
                                setCompany(e?.target?.value)
                            }}
                            size="small"
                        />
                    </Col>
                    <Col flex="auto">
                        <TextField
                            label={intl.formatMessage(messages.jobLink)}
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
                                    company && job && await run(person?.toResume(), job, company);
                                }}>{intl.formatMessage(messages.btn)}</Button>
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
                        >{intl.formatMessage(messages.copy)}</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Editor