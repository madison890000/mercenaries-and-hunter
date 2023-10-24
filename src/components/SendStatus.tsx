import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import {defineMessages, useIntl} from "react-intl";
import {SendType} from "../types";

const messages = defineMessages({
  send: {
    id: 'send-enum.send',
    defaultMessage: "Reload Data",
  },
  startInterview: {
    id: 'send-enum.startInterview',
  },
  middleInterview: {
    id: 'send-enum.middleInterview',
  },
  finalInterview: {
    id: 'send-enum.finalInterview',
  },
  offer: {
    id: 'send-enum.offer',
  },
  rejected: {
    id: 'send-enum.rejected',
  },
});

interface SendStatusProps {
  value: string | number | undefined;
  onChange?: any;
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

  const intl = useIntl();
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
        <MenuItem value={SendType.SEND}>{intl.formatMessage(messages.send)}</MenuItem>
        <MenuItem value={SendType.START_INTERVIEWING}
                  style={{
                    color: '#000099'
                  }}
        >{intl.formatMessage(messages.startInterview)}</MenuItem>
        <MenuItem value={SendType.MIDDLE_INTERVIEWING}
                  style={{
                    color: 'var(--color-blue-6)'
                  }}
        >{intl.formatMessage(messages.middleInterview)}</MenuItem>
        <MenuItem value={SendType.FINAL_INTERVIEWING}
                  style={{
                    color: '#ff33cc',
                  }}
        >{intl.formatMessage(messages.finalInterview)}</MenuItem>
        <MenuItem value={SendType.OFFER}
                  style={{
                    color: 'var(--color-primary)'
                  }}
        >{intl.formatMessage(messages.offer)}</MenuItem>
        <MenuItem value={SendType.REJECTED} style={{
          color: 'var(--color-red)'
        }}>{intl.formatMessage(messages.rejected)}</MenuItem>
      </Select>
    </div>
  )
}

export default SendStatus