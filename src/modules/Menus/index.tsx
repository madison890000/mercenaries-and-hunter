import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {useLocation, useNavigate} from "react-router";
import {defineMessages, useIntl} from "react-intl";
import SelectLanguage from "../SelectLanguage";
import LocaleContext from '../../contexts/LocaleContext';

const messages = defineMessages({
    web: {
        id: 'menu.assistant-job',
        defaultMessage: 'Assist Find Job'
    },
    home: {
        id: 'menu.send-list',
        defaultMessage: 'Applied List'
    },
    tools: {
        id: 'menu.tools',
        defaultMessage: 'Tools'
    },
});


const Menus = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const intl = useIntl();
    const MENU_LIST = [
        {name: 'web', hash: '/web', title: intl.formatMessage(messages.web)},
        {name: 'home', hash: '/', title: intl.formatMessage(messages.home)},
        {name: 'tools', hash: '/tools', title: intl.formatMessage(messages.tools)},
    ];

    const {locale, updateLocale, languages} = React.useContext(LocaleContext);
    return (
        <div style={{
            position: 'relative'
        }}>
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
                        <MenuItem
                            key={e?.hash}
                            onClick={() => {
                                navigate(e?.hash)
                            }}
                            selected={location.pathname === e?.hash}
                        >
                            {e?.title}
                        </MenuItem>
                    ))
                }
            </MenuList>
            <div style={{
                position: 'absolute',
                bottom: 10,
                right: 5,
                zIndex: 1000
            }}>
                <SelectLanguage value={locale} options={languages} onChange={updateLocale}/>
            </div>
        </div>
    );
};
export default Menus;
