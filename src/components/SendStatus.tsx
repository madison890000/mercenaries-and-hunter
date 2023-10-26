import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { defineMessages, useIntl } from 'react-intl';
import { SendType } from '../types';

const messages = defineMessages({
  send: {
    id: 'send-enum.send',
    defaultMessage: 'Reload Data'
  },
  startInterview: {
    id: 'send-enum.startInterview'
  },
  middleInterview: {
    id: 'send-enum.middleInterview'
  },
  finalInterview: {
    id: 'send-enum.finalInterview'
  },
  offer: {
    id: 'send-enum.offer'
  },
  rejected: {
    id: 'send-enum.rejected'
  }
});

interface SendStatusProps {
  value: string | number | undefined;
  onChange?: any;
}

const colors = {
  [SendType.SEND]: '#609966',
  [SendType.START_INTERVIEWING]: '#6096B4',
  [SendType.MIDDLE_INTERVIEWING]: '#6096B4',
  [SendType.FINAL_INTERVIEWING]: '#6096B4',
  [SendType.OFFER]: '#DBA39A',
  [SendType.REJECTED]: '#BDCDD6'
};
const SendStatus: React.FC<SendStatusProps> = ({ value, onChange }) => {
  const intl = useIntl();
  return (
    <div
      style={{
        margin: 10
      }}
    >
      <Select
        value={value}
        style={{
          minWidth: 160,
          color: 'white',
          textAlign: 'center',
          // @ts-ignore
          backgroundColor: colors[value]
        }}
        onChange={onChange}
        variant="standard"
      >
        <MenuItem
          value={SendType.SEND}
          style={{
            margin: 4,
            color: 'white',
            backgroundColor: colors[SendType.SEND]
          }}
        >
          {intl.formatMessage(messages.send)}
        </MenuItem>
        <MenuItem
          value={SendType.START_INTERVIEWING}
          style={{
            margin: 4,
            color: 'white',
            backgroundColor: colors[SendType.START_INTERVIEWING]
          }}
        >
          {intl.formatMessage(messages.startInterview)}
        </MenuItem>
        <MenuItem
          value={SendType.MIDDLE_INTERVIEWING}
          style={{
            margin: 4,
            color: 'white',
            backgroundColor: colors[SendType.MIDDLE_INTERVIEWING]
          }}
        >
          {intl.formatMessage(messages.middleInterview)}
        </MenuItem>
        <MenuItem
          value={SendType.FINAL_INTERVIEWING}
          style={{
            margin: 4,
            color: 'white',
            backgroundColor: colors[SendType.FINAL_INTERVIEWING]
          }}
        >
          {intl.formatMessage(messages.finalInterview)}
        </MenuItem>
        <MenuItem
          value={SendType.OFFER}
          style={{
            margin: 4,
            color: 'white',
            backgroundColor: colors[SendType.OFFER]
          }}
        >
          {intl.formatMessage(messages.offer)}
        </MenuItem>
        <MenuItem
          value={SendType.REJECTED}
          style={{
            margin: 4,
            color: 'white',
            backgroundColor: colors[SendType.REJECTED]
          }}
        >
          {intl.formatMessage(messages.rejected)}
        </MenuItem>
      </Select>
    </div>
  );
};

export default SendStatus;
