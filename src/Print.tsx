import React, {useEffect, useRef} from 'react';
import styles from './App.module.scss';
import {Divider} from './models/components';
import {defineMessages, useIntl} from 'react-intl';
import useReload from "./models/hooks/useReload";

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

function Print() {
    const intl = useIntl();
    const reload = useReload();
    // @ts-ignore
    const {current: storePerson} = useRef(window.storePerson);
    useEffect(() => {
        storePerson.editType = 'preview';
        reload()
    }, [])
    return (
        <div className={styles.main}>
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
    );
}

export default Print;
