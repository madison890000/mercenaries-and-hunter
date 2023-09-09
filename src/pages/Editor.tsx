import React, {useState} from "react";
import {Col, Row} from "antd";
import {useMessage} from "../hooks/useMessage";
import copy from 'copy-to-clipboard';
import Button from "../models/components/Button";
import {CardContent, TextField, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import Login from "../modules/GoogleLogin";

const Editor = () => {
    const [data, setData] = useState<string>();
    const {run, message, loading} = useMessage();
    return (
        <>
            <Login/>
            <Row gutter={12} style={{
                margin: 12,
            }}>
                <Col span={12} style={{
                    marginTop: 12
                }}>
                    <div>
                        <TextField
                            label="输入需要优化的内容"
                            onChange={(e) => {
                                setData(e?.target?.value)
                            }}
                            rows={18}
                            fullWidth
                            variant="filled"
                            multiline
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{textAlign: 'center', marginBottom: 10}}>
                        <Button variant="contained" loading={loading} type="primary" onClick={async () => {
                            data && await run(data);
                        }}>一键翻译并修改语法和语气</Button>
                    </div>
                    <Card>
                        <CardContent style={{
                            minHeight: 340,
                        }}>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                {message}
                            </Typography>
                        </CardContent>
                    </Card>
                    <div>
                        <Button
                            type="primary"
                            onClick={() => {
                                copy(message);
                            }}
                        >复制</Button>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Editor