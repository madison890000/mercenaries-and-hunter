import React, {useContext, useEffect} from 'react';
import styles from '../App.module.scss';
import {Divider} from '../models/components';
import {defineMessages, useIntl} from 'react-intl';
import useReload from "../models/hooks/useReload";
import GlobalContext from "../contexts/GlobalContext";
import {useNavigate} from "react-router";

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

function Print({person: outerPerson}: any) {
    const intl = useIntl();
    const reload = useReload();
    const {person: globalPerson} = useContext(GlobalContext);

    const person = outerPerson ?? globalPerson;
    useEffect(() => {
        person.editType = 'view';
        reload()
    }, [globalPerson]);
    const ViewBaseInfo = person.ViewBaseInfo;
    const ViewDescription = person.ViewDescription;
    const ViewSkills = person.ViewSkills;
    const ViewPeriods = person.ViewPeriods;
    const ViewEducations = person.ViewEducations;
    return (
        <div className={styles.main}>
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
    );
}

export default Print;
