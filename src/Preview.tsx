import React, {useRef, useState} from 'react';
import styles from './App.module.scss';
import madison from './Madison';
import {Divider} from './models/components';
import {defineMessages, useIntl} from 'react-intl';
import Button from "@mui/material/Button";

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
    const {current: person} = useRef(madison);
    return (
        <div>
            <div className={styles.main}>
                {person?.viewBaseInfo()}
                <Divider title={intl.formatMessage(messages.profile)}/>
                {person?.viewDescription()}
                <Divider title={intl.formatMessage(messages.skills)}/>
                {person?.viewSkills()}
                <Divider title={intl.formatMessage(messages.professionalExperiences)}/>
                {person?.viewPeriods()}
                <Divider title={intl.formatMessage(messages.educationExperiences)}/>
                {person?.viewEducations()}
            </div>
        </div>
    );
}

export default Home;
