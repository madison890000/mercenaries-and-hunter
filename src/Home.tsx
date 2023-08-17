import React, {useRef} from 'react';
import styles from './App.module.scss';
import {Divider} from './models/components';
import {defineMessages, useIntl} from 'react-intl';
import Button from "@mui/material/Button";
import useReload from "./models/hooks/useReload";
import {useNavigate} from "react-router";
import {Row} from "antd";

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
    // @ts-ignore
    const {current: storePerson} = useRef(window.storePerson);
    const navigate = useNavigate();
    return (
        <div>
            <Row justify="center">
                {
                    storePerson.editType === 'view' && <Button onClick={() => {
                        storePerson.editType = 'preview';
                        reload()
                    }} size="large">预览</Button>
                }
                {
                    storePerson.editType === 'preview' && <Button onClick={() => {
                        storePerson.editType = 'view';
                        reload()
                    }}>返回编辑</Button>
                }
                <Button onClick={() => {
                    navigate('/print')
                }} size="large">打印</Button>
            </Row>
            <div className={styles.main} id="print-id">
                <storePerson.ViewBaseInfo/>
                <Divider title={intl.formatMessage(messages.profile)}/>
                <storePerson.ViewDescription/>
                <Divider title={intl.formatMessage(messages.skills)}/>
                <storePerson.ViewSkills/>
                <Divider title={intl.formatMessage(messages.professionalExperiences)}/>
                <storePerson.ViewPeriods/>
                <Divider title={intl.formatMessage(messages.educationExperiences)}/>
                <storePerson.ViewEducations/>
            </div>
        </div>
    );
}

export default Home;
