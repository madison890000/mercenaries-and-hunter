import {useState} from "react";
import {formatAndTranslateCV} from "../service";

const TIME_OUT_MS = 60000;


export function useCoverLetter() {
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [done, setDone] = useState(false);
    const run = async (resume: string, job: string, company: string) => {
        try {
            const res = await formatAndTranslateCV(resume, job, company);
            let responseText = "";
            setMessage(responseText);
            const finish = () => {
                setMessage(responseText);
                setDone(true);
            };
            if (res.ok) {
                const reader = res.body?.getReader();
                const decoder = new TextDecoder();
                while (true) {
                    const resTimeoutId = setTimeout(() => finish(), TIME_OUT_MS);
                    const content = await reader?.read();
                    clearTimeout(resTimeoutId);

                    if (!content || !content.value) {
                        break;
                    }

                    const text = decoder.decode(content.value, {stream: true});
                    responseText += text;
                    const done = content.done;
                    setMessage(responseText);
                    setDone(false);
                    if (done) {
                        break;
                    }
                }

                finish();
            } else if (res.status === 401) {
                console.error("Unauthorized");
                setError("Unauthorized");
            } else {
                setError("Stream Error");
            }
        } catch (err) {
            setError("NetWork Error");
        }
    }
    return {
        run,
        error,
        message,
        done,
    }
}
