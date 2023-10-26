import { useState } from 'react';
import { formatAndTranslateCV } from '../services/stream';
import formatStreamResponse from '../utils/FormatStreamResponse';
import globalStore from '../lib/GlobalData';
import { AUTO_CL_AI_MESSAGES } from '../constants/StoreKeys';

export function useCoverLetter() {
  const [error, setError] = useState('');
  const [message, setMessage] = useState(globalStore.get(AUTO_CL_AI_MESSAGES));
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const run = async (resume: any, job: string, company: string) => {
    try {
      setLoading(true);
      const res = await formatAndTranslateCV(resume, job, company);
      await formatStreamResponse(res, {
        onProgress: responseText => {
          setMessage(responseText);
          setDone(false);
        },
        onFinish: responseText => {
          setMessage(responseText);
          globalStore.save(AUTO_CL_AI_MESSAGES, responseText);
          setDone(true);
          setLoading(false);
        },
        onError: e => {
          setError(e?.toString());
        }
      });
    } catch (err) {
      setError('NetWork Error');
    }
  };
  return {
    run,
    error,
    message,
    done,
    loading
  };
}
