import { API_DOMAIN } from '../constants/domain';
import globalStore from '../lib/GlobalData';
import { GOOGLE_TOKEN_KEY } from '../constants/StoreKeys';

export const formatAndTranslate = async (text: string) => {
  return fetch(`${API_DOMAIN}/chat/format-and-translate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${globalStore.get(GOOGLE_TOKEN_KEY)}`
    },
    body: JSON.stringify({
      content: text
    })
  });
};
export const formatAndTranslateCV = async (resume: string, job: string, company: string) => {
  return fetch(`${API_DOMAIN}/chat/write-cl`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${globalStore.get(GOOGLE_TOKEN_KEY)}`
    },
    body: JSON.stringify({
      resume,
      job,
      company
    })
  });
};
