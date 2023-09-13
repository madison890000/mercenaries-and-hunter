import {Col, Row} from "antd";

interface PreviewProps {
    flex?: boolean;
    data: any[];
}

const Preview: React.FC<PreviewProps> = ({flex, data}) => {
    if (flex) {
        return (
            <Row>
                {data?.filter(d => !d?.isHidden)?.map(d => <Col span={8}>
                    <d.Show/>
                </Col>)}
            </Row>
        )
    }
    return (
        <>
            {data?.map(d => <d.Show/>)}
        </>
    )
}

export default Preview