import {useState} from "react";
import {scoreResume} from "../services/mh";
import globalStore from "../lib/GlobalData";
import {ADVISE_KEY, SCORE_KEY} from "../constants/StoreKeys";

const TIME_OUT_MS = 60000;


export function useScore() {
    const [error, setError] = useState('');
    const [score, setScore] = useState(globalStore.get(SCORE_KEY));
    const [advise, setAdvise] = useState<string[]>(globalStore.get(ADVISE_KEY));
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const run = async (resume: any, locale: string) => {
        try {
            setLoading(true);
            const res = await scoreResume(resume, locale);
            if (res.score) {
                setScore(res?.score);
                globalStore.save(SCORE_KEY, res?.score);
                setAdvise(res?.advise);
                globalStore.save(ADVISE_KEY, res?.advise)
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
