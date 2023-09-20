import React, {useEffect} from 'react';
import styles from '../App.module.scss';
import {Divider} from '../models/components';
import {defineMessages, useIntl} from 'react-intl';
import useReload from "../models/hooks/useReload";
import Person from "../models/Person";

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
    },
    goPrint: {
        id: 'btn.print'
    },
    save: {
        id: 'btn.save'
    }
});


function Resume({person}: { person: Person }) {
    const intl = useIntl();
    const reload = useReload();
    const ViewBaseInfo = person.ViewBaseInfo;
    const ViewDescription = person.ViewDescription;
    const ViewSkills = person.ViewSkills;
    const ViewPeriods = person.ViewPeriods;
    const ViewEducations = person.ViewEducations;
    useEffect(() => {
        person.editType = 'edit';
        reload()
    }, [])

    return (
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
    );
}

export default Resume;
