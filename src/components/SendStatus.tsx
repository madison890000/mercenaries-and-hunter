import { defineMessages, useIntl } from 'react-intl';
import { SendType } from '../types';

const messages = defineMessages({
  send: {
    id: 'send-enum.send',
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
  value: SendType;
}

const TitleStatus = ({ value }: SendStatusProps) => {
  const intl = useIntl();
  let title;
  switch (value) {
    case SendType.SEND:
      title = intl.formatMessage(messages.send);
      break;
    case SendType.START_INTERVIEWING:
      title = intl.formatMessage(messages.startInterview);
      break;
    case SendType.MIDDLE_INTERVIEWING:
      title = intl.formatMessage(messages.middleInterview);
      break;
    case SendType.FINAL_INTERVIEWING:
      title = intl.formatMessage(messages.finalInterview);
      break;
    case SendType.OFFER:
      title = intl.formatMessage(messages.offer);
      break;
    case SendType.REJECTED:
      title = intl.formatMessage(messages.rejected);
      break;
  }
  return <>
    {title}
  </>
}
export default TitleStatus;
