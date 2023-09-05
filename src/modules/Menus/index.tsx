import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {useLocation, useNavigate} from "react-router";

const MENU_LIST = [
    {name: 'edit', hash: '/edit', title: '简历制作'},
    {name: 'home', hash: '/', title: '翻译修饰'},
    {name: 'cl', hash: '/cl', title: '自动CL'},
    {name: 'web', hash: '/web', title: '快速求职'},
    {name: 'send', hash: '/send', title: '投递列表'}
]

const Menus = () => {
    const navigate = useNavigate();
    const location = useLocation();
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
        </>
    );
};
export default Menus;
