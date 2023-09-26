import React, {useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import Switch from '@mui/material/Switch';
import {
    addSend,
    changeTranslateTo,
    closeTranslate,
    getTranslateConfig,
    hasSite,
    openTranslate,
    removeSend
} from "./service";
import {Checkbox, Divider, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const label = {inputProps: {'aria-label': 'Switch demo'}};

const getUrl = () => {
    const queryInfo = {
        active: true,
        currentWindow: true
    };
    return new Promise<{
        url: string;
        tabId: number;
        title?: string;
    }>(resolve => {
        chrome?.tabs?.query(queryInfo, function (tabs) {
            const activeTab = tabs?.find(t => t?.active);
            resolve({
                url: activeTab?.url as string,
                tabId: activeTab?.id ?? 0,
                title: activeTab?.title
            })
        });
    })
}

function Popup() {
    const [sended, setSended] = useState(false);
    const [translateOpen, setTranslateOpen] = useState(false);
    const [translateTo, setTranslateTo] = useState("zho_Hans");
    const [tab, setTab] = useState<{
        url: string;
        tabId: number;
        title?: string;
    }>({url: '', tabId: 0});
    const hasSend = async () => {
        const res = await hasSite(tab?.url);
        setSended(res);
        // Next state will always be the opposite
        const nextState = res ? 'Yes' : 'Not';
        // Set the action badge to the next state
        await chrome?.action?.setBadgeText({
            tabId: tab.tabId,
            text: nextState,
        });
    }
    const hasTranslate = async () => {
        const res = await getTranslateConfig();
        setTranslateOpen(res?.open);
        setTranslateTo(res?.to || "zho_Hans");
    }
    const fetchUrl = async () => {
        const d = await getUrl();
        setTab(d);
    }
    useEffect(() => {
        fetchUrl();
        hasTranslate();
    }, []);
    useEffect(() => {
        hasSend();
    }, [tab?.url]);
    const callBack = async () => {
        hasSend();
        hasTranslate();
    }
    return (
        <div style={{
            padding: 12,
            minWidth: 260,
            textAlign: "center"
        }}>
            <Divider style={{
                margin: 20
            }}>Mark Site</Divider>
            <div>
                <Checkbox {...label} checked={sended} onChange={async (e) => {
                    if (e?.target?.checked) {
                        await addSend(tab?.url, {
                            title: tab?.title
                        });
                        callBack();
                    } else {
                        await removeSend(tab?.url);
                        callBack();
                    }
                }}/>
                {sended ? 'Applied' : 'Available'}</div>

            <Divider style={{
                margin: 20
            }}>Setting</Divider>
            <div>
                <Switch {...label} checked={translateOpen} onChange={async (e) => {
                    if (e?.target?.checked) {
                        console.log('toggle')
                        await openTranslate();
                        callBack();
                    } else {
                        await closeTranslate();
                        callBack();
                    }
                }}/>
                {translateOpen ? 'Auto Translate' : 'Disable Translate'}
            </div>
            {
                translateOpen && (
                    <div>
                        <span style={{
                            marginRight: 12
                        }}>Translate to</span>
                        <Select
                            variant="standard"
                            defaultValue={"zho_Hans"}
                            value={translateTo}
                            onChange={async e => {
                                console.log(e?.target?.value)
                                setTranslateTo(e?.target?.value);
                                await changeTranslateTo(e?.target?.value);
                                callBack();
                            }}
                        >
                            <MenuItem value="zho_Hans">中文</MenuItem>
                            <MenuItem value="fra_Latn">Français</MenuItem>
                            <MenuItem value="deu_Latn">Deutsch</MenuItem>
                            <MenuItem value="jpn_Jpan">日本語</MenuItem>
                            <MenuItem value="kor_Hang">한국인</MenuItem>
                            <MenuItem value="spa_Latn">español</MenuItem>
                        </Select>
                    </div>
                )
            }
            <Divider style={{
                margin: 20
            }}>Dashboard</Divider>
            <div><Button variant="contained" size="small" onClick={async () => {
                window.open('https://www.mercenarieshunter.com/#/send')
            }}>Applied List</Button></div>
        </div>
    );
}

export default Popup;
