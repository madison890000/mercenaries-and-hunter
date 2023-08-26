import React, {useContext} from 'react';
import styles from './App.module.scss';
import {Divider} from './models/components';
import {defineMessages, useIntl} from 'react-intl';
import Button from "@mui/material/Button";
import useReload from "./models/hooks/useReload";
import {useNavigate} from "react-router";
import {Col, Row} from "antd";
import GlobalContext from "./contexts/GlobalContext";
import Card from "@mui/material/Card";

const messages = defineMessages({
    profile: {
        id: 'section.divider.profile',
        defaultMessage: 'Profile'
    },
    skills: {
        id: 'section.divider.skills',
        defaultMessage: 'Skills'
    },
    professionalExperiences: {
        id: 'section.divider.professionalExperiences'
    },
    educationExperiences: {
        id: 'section.divider.educationExperiences',
        defaultMessage: 'Education'
    }
});


function Home() {
    const intl = useIntl();
    const reload = useReload();
    const {person, scoreValues} = useContext(GlobalContext);
    const navigate = useNavigate();

    const ViewBaseInfo = person.ViewBaseInfo;
    const ViewDescription = person.ViewDescription;
    const ViewSkills = person.ViewSkills;
    const ViewPeriods = person.ViewPeriods;
    const ViewEducations = person.ViewEducations;
    const {score, advise} = scoreValues;
    return (
        <div>
            <Card style={{
                padding: 20
            }}>
                <Row align="middle">
                    <Col span={8}>
                        <h5>IT猎人得分：{score}</h5>
                    </Col>
                    <Col span={16}>
                        <h5>
                            建议：
                            {
                                score === 0 && (
                                    <Button onClick={() => {
                                        navigate('/score')
                                    }}>去打分</Button>
                                )
                            }
                        </h5>
                        <div>
                            {advise?.map((e, index) =>
                                <div>
                                    <span>{e}</span>
                                </div>
                            )}

                        </div>
                    </Col>
                </Row>
            </Card>
            <Row justify="center">
                {
                    person.editType === 'view' && <Button onClick={() => {
                        person.editType = 'preview';
                        reload()
                    }} size="large">预览</Button>
                }
                {
                    person.editType === 'preview' && <Button onClick={() => {
                        person.editType = 'view';
                        reload()
                    }}>返回编辑</Button>
                }
                <Button onClick={() => {
                    navigate('/print')
                }} size="large">去打印</Button>
                {
                    <Button onClick={() => {
                        window.localStorage.setItem('resume', JSON.stringify(person))
                    }}>保存(请修改后手动保存防止丢失数据)</Button>
                }
            </Row>
            <div className={styles.main} id="print-id">
                <ViewBaseInfo/>
                <Divider title={intl.formatMessage(messages.profile)}/>
                <ViewDescription/>
                <Divider title={intl.formatMessage(messages.skills)}/>
                <ViewSkills/>
                <Divider title={intl.formatMessage(messages.professionalExperiences)}/>
                <ViewPeriods/>
                <Divider title={intl.formatMessage(messages.educationExperiences)}/>
                <ViewEducations/>
            </div>
        </div>
    );
}

export default Home;
