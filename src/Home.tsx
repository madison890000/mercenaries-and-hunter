import React, {useContext, useEffect} from 'react';
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
    useEffect(() => {
        person.editType = 'view';
        reload()
    }, [])
    const save = () => {
        window.localStorage.setItem('resume', JSON.stringify(person))
    }
    useEffect(() => {
        let saveJob = setInterval(() => {
            save();
        }, 1000 * 60)
        return () => clearInterval(saveJob)
    }, [])
    return (
        <div>
            <Card style={{
                padding: 10
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
            <Row justify="space-between" style={{
                padding: 10
            }}>
                <Button onClick={() => {
                    navigate('/copy')
                }} size="small">去导入</Button>
                <Button variant="contained" onClick={() => {
                    navigate('/print')
                }} size="large">去打印</Button>
                {
                    <Button onClick={() => {
                        save();
                    }}>保存(每1分钟自动保存)</Button>
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
