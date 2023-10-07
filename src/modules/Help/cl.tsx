import {Card} from "@mui/material";
import {useIntl} from "react-intl";
import {Col, Row} from "antd";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router";
import Divider from "../../components/Divider";


const CL = () => {
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
            }}>{intl.formatMessage({id: 'menu.auto-cl'})}</h3>
            <Row justify="space-between">
                <Col span={12}>
                    <div style={{
                        textAlign: "left",
                        margin: 20,
                        fontStyle: 'italic'
                    }}>
                        <div>投递没回应，没有写Cover Letter？</div>
                        <div>一份Cover Letter来回改，只是换了求职公司名称？</div>
                        <div>抓耳挠骚，不知如何写Cover Letter？</div>
                    </div>
                    <div style={{
                        textAlign: "left",
                        margin: 20,
                        fontWeight: 'bolder'
                    }}>
                        <div>一键生成，告别蹩脚的求职信！</div>
                        <div>助你无障碍英文沟通。</div>
                        <div style={{
                            marginTop: 20
                        }}>
                            <Button variant="contained" onClick={() => {
                                navigate("/cl")
                            }}>快去体验</Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <img src="/gif/cl.gif"/>
                </Col>
            </Row>
        </Card>
    )
}

export default CL