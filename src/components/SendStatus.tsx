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

const colors = {
    [SendType.SEND]: 'black',
    [SendType.START_INTERVIEWING]: '#000099',
    [SendType.MIDDLE_INTERVIEWING]: 'var(--color-blue-6)',
    [SendType.FINAL_INTERVIEWING]: '#ff33cc',
    [SendType.OFFER]: 'var(--color-primary)',
    [SendType.REJECTED]: 'var(--color-red)',
}
const SendStatus: React.FC<SendStatusProps> = ({value, onChange}) => {


    return (
        <div style={{
            margin: 10
        }}>
            <Select
                value={value}
                style={{
                    minWidth: 100,
                    // @ts-ignore
                    color: colors[value],
                }}
                onChange={onChange}
                variant="standard"
            >
                <MenuItem value={SendType.SEND}>投递中</MenuItem>
                <MenuItem value={SendType.START_INTERVIEWING}
                          style={{
                              color: '#000099'
                          }}
                >开始面试</MenuItem>
                <MenuItem value={SendType.MIDDLE_INTERVIEWING}
                          style={{
                              color: 'var(--color-blue-6)'
                          }}
                >中期面试</MenuItem>
                <MenuItem value={SendType.FINAL_INTERVIEWING}
                          style={{
                              color: '#ff33cc',
                          }}
                >终面</MenuItem>
                <MenuItem value={SendType.OFFER}
                          style={{
                              color: 'var(--color-primary)'
                          }}
                >发Offer</MenuItem>
                <MenuItem value={SendType.REJECTED} style={{
                    color: 'var(--color-red)'
                }}>婉拒</MenuItem>
            </Select>
        </div>
    )
}

export default SendStatus