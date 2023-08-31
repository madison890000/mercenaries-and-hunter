import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {useLocation, useNavigate} from "react-router";

const Menus = () => {
    const navigate = useNavigate();
    const location = useLocation();
    if (location.pathname === '/print') {
        return null
    }
    return (
        <>
            <MenuList
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    color: 'white',
                    background: '#1976d2'
                }}
            >
                <MenuItem onClick={() => {
                    navigate('/')
                }}>
                    简历制作
                </MenuItem>
                <MenuItem onClick={() => {
                    navigate('/score')
                }}>
                    简历打分
                </MenuItem>
                <MenuItem onClick={() => {
                    navigate('/edit')
                }}>
                    对话翻译
                </MenuItem>
                <MenuItem onClick={() => {
                    navigate('/cl')
                }}>
                    Cover Letter
                </MenuItem>
                <MenuItem onClick={() => {
                    navigate('/web')
                }}>
                    适配求职网站
                </MenuItem>
                <MenuItem onClick={() => {
                    navigate('/send')
                }}>
                    已投递列表
                </MenuItem>
            </MenuList>
        </>
    );
};
export default Menus;
