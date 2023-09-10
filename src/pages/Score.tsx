import React, {useContext, useState} from "react";
import {Divider, notification} from "antd";
import GlobalContext from "../contexts/GlobalContext";
import Button from "../models/components/Button";
import Card from "@mui/material/Card";
import {TextField} from "@mui/material";
import {hasResume} from "../utils";
import LoginWrapper from "../modules/LoginWrapper/LoginWrapper";

const Score = () => {
    const {person, scoreValues} = useContext(GlobalContext);
    const [resume, setResume] = useState('');
    const {run, score, advise, loading} = scoreValues;
    const finalResume = resume || person.toResume();
    const canScore = () => {
        if (resume) {
            return true
        } else if (hasResume()) {
            return true
        } else {
            notification.warning({
                message: '请创建简历或者在上方输入您的简历文本'
            })
        }
    }
    return (
        <>
            <div style={{
                marginTop: 20,
                textAlign: 'center'
            }}>
                给你的简历打个分吧！看看你是几星IT猎人！
            </div>
            <Divider></Divider>
            <div style={{textAlign: 'center', marginBottom: 10, padding: 10}}>
                <TextField
                    label="您的简历"
                    onChange={(e) => {
                        setResume(e?.target?.value)
                    }}
                    placeholder="如果您还未创建简历，请复制你的简历文本到此处。如果已创建完成，直接打分即可。"
                    fullWidth
                    variant="filled"
                    multiline
                />
                <Divider></Divider>
                <LoginWrapper>
                    <Button loading={loading} type="primary" onClick={async () => {
                        canScore() && await run(finalResume, !hasResume());
                    }}>一键打分</Button>
                </LoginWrapper>
            </div>

            <Card style={{
                padding: 20
            }}>
                <h4>IT猎人得分：{score}</h4>
                <Divider></Divider>
                <h5>建议：</h5>
                <div>{advise?.map((e, index) =>
                    <div>
                        <span>{e}</span>
                    </div>
                )}</div>
            </Card>
        </>
    )
}

export default Score