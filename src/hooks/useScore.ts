import {useState} from "react";
import {scoreResume} from "../services/mh";
import globalStore from "../lib/GlobalData";

const TIME_OUT_MS = 60000;


export function useScore() {
    const [error, setError] = useState('');
    const [score, setScore] = useState(globalStore.get('score'));
    const [advise, setAdvise] = useState<string[]>(globalStore.get('advise'));
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const run = async (resume: any, locale: string) => {
        try {
            setLoading(true);
            const res = await scoreResume(resume,locale);
            if (res.score) {
                setScore(res?.score);
                globalStore.save('score', res?.score);
                setAdvise(res?.advise);
                globalStore.save('advise', res?.advise)
            } else {
                setScore(0);

                setAdvise([
                    '我需要以更清晰的格式提供特定的技能、经验和其他相关信息来进行评估。'
                ])
            }
            ;
            setError('');
        } catch (err) {
            console.log(err)
            setError("NetWork Error");
        } finally {
            setDone(true);
            setLoading(false);
        }
    }
    return {
        run,
        error,
        score,
        advise,
        done,
        loading,
    }
}
