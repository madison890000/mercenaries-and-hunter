import { TIME_OUT_MS } from '../constants/date';

const formatStreamResponse = async (
  res: Response,
  {
    onProgress,
    onFinish,
    onError
  }: {
    onProgress?: (e: string) => void;
    onFinish?: (e: string) => void;
    onError?: (e: Error) => void;
  }
) => {
  let responseText = '';
  onProgress?.(responseText);
  if (res.ok) {
    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const resTimeoutId = setTimeout(() => onFinish?.(''), TIME_OUT_MS);
      const content = await reader?.read();
      clearTimeout(resTimeoutId);
      if (!content || !content.value) {
        break;
      }
      const text = decoder.decode(content.value, { stream: true });
      responseText += text;
      const done = content.done;
      onProgress?.(responseText);
      if (done) {
        break;
      }
    }

    onFinish?.(responseText);
  } else if (res.status === 401) {
    console.error('Unauthorized');
    onError?.(new Error('Unauthorized'));
  } else {
    onError?.(new Error('Stream Error'));
  }
};

export default formatStreamResponse;
