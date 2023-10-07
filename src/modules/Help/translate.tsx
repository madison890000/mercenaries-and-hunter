import {Card} from "@mui/material";
import {useIntl} from "react-intl";
import {Col, Row} from "antd";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router";
import Divider from "../../components/Divider";


const Translate = () => {
    const intl = useIntl();
    const navigate = useNavigate();
    return (
        <Card style={{
            textAlign: "left",
            padding: 12,
            margin: 20,
            background:'var(--color-blue-9)'
        }}>
            <h3 style={{
                marginLeft: '20px'
            }}>{intl.formatMessage({id: 'menu.format-and-translate'})}!</h3>
            <Row justify="space-between">
                <Col span={8}>
                    <div style={{
                        textAlign: "left",
                        margin: 20,
                        fontStyle: 'italic'
                    }}>
                        <div>不懂英语，不敢回复email？</div>
                        <div>语法混乱，不敢回复email？</div>
                        <div>语气不得体，不敢回复email？</div>
                    </div>
                    <div style={{
                        textAlign: "left",
                        margin: 20,
                        fontWeight: 'bolder'
                    }}>
                        <div>一键翻译，修正语法错误和语气！</div>
                        <div>助你无障碍英文沟通。</div>
                        <div style={{
                            marginTop: 20
                        }}>
                            <Button variant="contained" onClick={() => {
                                navigate("/")
                            }}>快去体验</Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <img src="/gif/email.gif"/>
                </Col>
            </Row>
        </Card>
    )
}

export default Translate