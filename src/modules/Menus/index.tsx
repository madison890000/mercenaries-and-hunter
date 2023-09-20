import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {useLocation, useNavigate} from "react-router";
import {defineMessages, useIntl} from "react-intl";
import SelectLanguage from "../SelectLanguage";
import LocaleContext from '../../contexts/LocaleContext';
import FLAGS from "../../constants/flags";

const messages = defineMessages({
    edit: {
        id: 'menu.resume',
        defaultMessage: "My Resume",
    },
    home: {
        id: 'menu.format-and-translate',
        defaultMessage: "AI translate"
    },
    import: {
        id: 'menu.import',
        defaultMessage: 'Score your Resume'
    },
    cl: {
        id: 'menu.auto-cl',
        defaultMessage: 'AI Cover Letter'
    },
    web: {
        id: 'menu.assistant-job',
        defaultMessage: 'Assist Find Job'
    },
    send: {
        id: 'menu.send-list',
        defaultMessage: 'Applied List'
    },
});


const Menus = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const intl = useIntl();
    const MENU_LIST = [
        {name: 'home', hash: '/', title: intl.formatMessage(messages.home)},
        {name: 'import', hash: '/import', title: intl.formatMessage(messages.import)},
        {name: 'web', hash: '/web', title: intl.formatMessage(messages.web)},
        {name: 'send', hash: '/send', title: intl.formatMessage(messages.send)},
    ];
    if (FLAGS.editResume) {
        MENU_LIST.splice(1, 0, {name: 'edit', hash: '/edit', title: intl.formatMessage(messages.edit)})
    }
    if (FLAGS.autoCL) {
        MENU_LIST.splice(1, 0, {name: 'cl', hash: '/cl', title: intl.formatMessage(messages.cl)})
    }
    const {locale, updateLocale, languages} = React.useContext(LocaleContext);
    return (
        <>
            <MenuList
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    color: 'var(--color-gray)',
                    background: 'var(--color-white)'
                }}
            >
                {
                    MENU_LIST.map((e) => (
                        <MenuItem onClick={() => {
                            navigate(e?.hash)
                        }} selected={location.pathname === e?.hash}>
                            {e?.title}
                        </MenuItem>
                    ))
                }
            </MenuList>
            <div style={{
                position: 'absolute',
                top: 10,
                right: 5,
                zIndex: 1000
            }}>
                <SelectLanguage value={locale} options={languages} onChange={updateLocale}/>
            </div>
        </>
    );
};
export default Menus;
