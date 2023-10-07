import {Card} from "@mui/material";
import {useIntl} from "react-intl";
import {Col, Row} from "antd";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router";

const CL = () => {
    const intl = useIntl();
    const navigate = useNavigate();
    return (
        <Card style={{
            textAlign: "left",
            padding: 30,
            margin: 30,
            background: 'var(--color-blue-9)'
        }}>
            <Row justify="space-between">

                <Col>
                    <h2 style={{
                        marginLeft: '20px'
                    }}>{intl.formatMessage({id: 'menu.auto-cl'})}</h2>
                    <div style={{
                        textAlign: "left",
                        margin: 20,
                        fontStyle: 'italic'
                    }}>
                        <div>投递没回应，没有写Cover Letter？</div>
                        <div>只是换名称，重复Cover Letter？</div>
                        <div>抓耳挠骚，不知如何写Cover Letter？</div>
                    </div>
                    <div style={{
                        textAlign: "left",
                        margin: 20,
                        fontWeight: 'bolder'
                    }}>
                        <div>一键生成，告别蹩脚的求职信！</div>
                        {/*<div>助你无障碍英文沟通。</div>*/}
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
                    <img src="/gif/cl.gif" height="320"/>
                </Col>
            </Row>
        </Card>
    )
}

export default CL