import {useState} from "react";
import {formatAndTranslate} from "../services/stream";
import formatStreamResponse from "../utils/FormatStreamResponse";
import globalStore from "../lib/GlobalData";
import {TRANSLATE_AI_TRANSLATED_DATA} from "../constants/StoreKeys";

export function useMessage() {
    const [error, setError] = useState('');
    const [message, setMessage] = useState(globalStore.get(TRANSLATE_AI_TRANSLATED_DATA));
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const run = async (text: string) => {
        try {
            setLoading(true);
            const res = await formatAndTranslate(text);
            await formatStreamResponse(res, {
                onProgress: (responseText) => {
                    setMessage(responseText);
                    globalStore.save(TRANSLATE_AI_TRANSLATED_DATA, responseText)
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
