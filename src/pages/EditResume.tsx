import React, {useContext, useEffect} from 'react';
import {Divider} from '../models/components';
import {defineMessages, useIntl} from 'react-intl';
import Button from "@mui/material/Button";
import useReload from "../models/hooks/useReload";
import {useNavigate} from "react-router";
import {Row} from "antd";
import GlobalContext from "../contexts/GlobalContext";
import AIScore from "../modules/AIScore";
import Resume from "./Resume";

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


function EditResume() {
    const intl = useIntl();
    const reload = useReload();
    const {person} = useContext(GlobalContext);
    const navigate = useNavigate();
    const hasPerson = !!person;
    useEffect(() => {
        if (hasPerson) {
            person.editType = 'edit'
        }
        ;
        reload();
    }, [])
    const save = () => {
        hasPerson && window.localStorage.setItem('resume', JSON.stringify(person))
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
                }} size="large">{intl.formatMessage(messages.goPrint)}</Button>
                <div style={{
                    textAlign: "center"
                }}>
                    <div>
                        <Button onClick={() => {
                            save();
                        }}>{intl.formatMessage(messages.save)}</Button>
                    </div>
                    <div style={{
                        fontSize: 'var(--base-font-size-small)'
                    }}>每一分钟自动保存
                    </div>
                </div>
            </Row>
            <Divider/>
            {
                person && <Resume person={person}/>
            }
        </div>
    );
}

export default EditResume;
