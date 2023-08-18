import React, {useContext} from 'react';
import styles from './App.module.scss';
import {Divider} from './models/components';
import {defineMessages, useIntl} from 'react-intl';
import Button from "@mui/material/Button";
import useReload from "./models/hooks/useReload";
import {useNavigate} from "react-router";
import {Row} from "antd";
import GlobalContext from "./contexts/GlobalContext";

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

    return (
        <div>
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
                {
                    <Button onClick={() => {
                        window.localStorage.setItem('resume', JSON.stringify(person))
                    }}>保存</Button>
                }
                <Button onClick={() => {
                    navigate('/print')
                }} size="large">去打印</Button>
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
