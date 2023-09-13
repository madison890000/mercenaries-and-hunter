import React, {useContext, useEffect} from 'react';
import styles from '../App.module.scss';
import {Divider} from '../models/components';
import {defineMessages, useIntl} from 'react-intl';
import Button from "@mui/material/Button";
import useReload from "../models/hooks/useReload";
import {useNavigate} from "react-router";
import {Row} from "antd";
import GlobalContext from "../contexts/GlobalContext";
import AIScore from "../modules/AIScore";

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
    const {person} = useContext(GlobalContext);
    const navigate = useNavigate();
    const ViewBaseInfo = person.ViewBaseInfo;
    const ViewDescription = person.ViewDescription;
    const ViewSkills = person.ViewSkills;
    const ViewPeriods = person.ViewPeriods;
    const ViewEducations = person.ViewEducations;
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
    }, []);

    return (
        <div>

            <Row justify="space-around" style={{
                padding: 10
            }}>
                <AIScore/>
                <Button variant="contained" onClick={() => {
                    navigate('/print')
                }} size="large">去打印</Button>
                <div style={{
                    textAlign: "center"
                }}>
                    <div>
                        <Button onClick={() => {
                            save();
                        }}>保存</Button>
                    </div>
                    <div style={{
                        fontSize: 'var(--base-font-size-small)'
                    }}>每一分钟自动保存
                    </div>
                </div>
            </Row>
            <Divider/>
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
