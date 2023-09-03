import Button from "@mui/material/Button";
import React, {useContext, useState} from "react";
import Person from "./models/Person";
import Print from "./Print";
import {Col, notification, Row} from "antd";
import GlobalContext from "./contexts/GlobalContext";

const getLocalCopyResume = () => {
    let localCopyResume;
    try {
        //@ts-ignore
        localCopyResume = new Person(JSON.parse(window.localStorage.getItem('resume-copy')))
    } catch (e) {
        notification.error({
            message: '简历格式不对，请重新复制后操作'
        })
    }
    return localCopyResume
}
const ExportResume = () => {
    const [copyResume, setCopyResume] = useState<any | undefined>();
    const exportResumeFromCopy = () => {
        navigator.clipboard.readText().then(e => {
            window.localStorage.setItem('resume-copy', e);
            setCopyResume(getLocalCopyResume());
        })
    }
    const {reloadPerson} = useContext(GlobalContext);
    return (
        <>
            <Row style={{
                padding: 12,
            }}>
                <Col span={12}>
                    <div>
                        <Row align="middle" justify="center">
                            <Col>
                                本地简历
                            </Col>
                            <Col>
                                <Button onClick={() => {
                                    setCopyResume(undefined)
                                }}>
                                    保留此版本
                                </Button>
                            </Col>
                        </Row>
                        <div className="small">
                            <Print/>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <Row align="middle" justify="center">
                            <Col>
                                <div>剪切板</div>
                            </Col>
                            {
                                copyResume && (
                                    <Col>
                                        <Button onClick={() => {
                                            window.localStorage.setItem('resume', JSON.stringify(copyResume));
                                            reloadPerson();
                                            setCopyResume(undefined)
                                        }}>
                                            保留此版本
                                        </Button>
                                    </Col>
                                )
                            }
                        </Row>
                        {
                            !copyResume && (
                                <div style={{
                                    padding: '40px',
                                    textAlign: 'center'
                                }}>
                                    <Button variant={"contained"} onClick={() => {
                                        exportResumeFromCopy();
                                    }} size="large">从插件导入</Button>
                                </div>
                            )
                        }
                        {
                            copyResume && (
                                <div>
                                    <Print person={copyResume}/>
                                </div>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ExportResume