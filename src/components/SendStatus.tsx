import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";

interface SendStatusProps {
    value: string | number | undefined;
    onChange: any;
}

enum SendType {
    SEND = 0,
    START_INTERVIEWING = 1,
    MIDDLE_INTERVIEWING = 2,
    FINAL_INTERVIEWING = 3,
    OFFER = 4,
    REJECTED = 5,
}

const SendStatus: React.FC<SendStatusProps> = ({value, onChange}) => {

    return (
        <div style={{
            margin: 10
        }}>
            <Select
                value={value}
                style={{
                    minWidth: 100
                }}
                onChange={onChange}
                variant="standard"
            >
                <MenuItem value={SendType.SEND}>投递中</MenuItem>
                <MenuItem value={SendType.START_INTERVIEWING}>开始面试</MenuItem>
                <MenuItem value={SendType.MIDDLE_INTERVIEWING}>中期面试</MenuItem>
                <MenuItem value={SendType.FINAL_INTERVIEWING}>终面</MenuItem>
                <MenuItem value={SendType.OFFER}>发Offer</MenuItem>
                <MenuItem value={SendType.REJECTED}>没谈拢</MenuItem>
            </Select>
        </div>
    )
}

export default SendStatus