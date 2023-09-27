import {useState} from "react";
import {formatAndTranslate} from "../services/stream";
import formatStreamResponse from "../utils/FormatStreamResponse";

export function useMessage() {
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const run = async (text: string) => {
        try {
            setLoading(true);
            const res = await formatAndTranslate(text);
            await formatStreamResponse(res, {
                onProgress: (responseText) => {
                    setMessage(responseText);
                    setDone(false);
                },
                onFinish: (responseText) => {
                    setMessage(responseText);
                    setDone(true);
                    setLoading(false);
                },
                onError: (e) => {
                    setError(e?.toString());
                }
            })
        } catch (err) {
            setError("NetWork Error");
        }
    }
    return {
        run,
        error,
        message,
        done,
        loading,
    }
}
