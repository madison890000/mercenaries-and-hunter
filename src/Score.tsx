import React, {useContext, useState} from "react";
import {Divider} from "antd";
import GlobalContext from "./contexts/GlobalContext";
import {useScore} from "./hooks/useScore";
import Button from "./models/components/Button";
import Card from "@mui/material/Card";
import {TextField} from "@mui/material";

const Score = () => {
    const {person} = useContext(GlobalContext);
    const [resume, setResume] = useState('');
    const {run, score, advise, loading} = useScore();
    const finalResume = resume || JSON.stringify(person.toJSON());
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
                <Button loading={loading} type="primary" onClick={async () => {
                    finalResume && await run(JSON.stringify(finalResume));
                }}>一键打分</Button>
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