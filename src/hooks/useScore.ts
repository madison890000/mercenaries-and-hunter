import {useState} from "react";
import {scoreResume} from "../service";
import Person from "../models/Person";

const TIME_OUT_MS = 60000;


export function useScore() {
    const [error, setError] = useState('');
    const [score, setScore] = useState(0);
    const [advise, setAdvise] = useState<string[]>([]);
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const run = async (resume: string, needCreateResume: boolean) => {
        try {
            setLoading(true);
            const res = await scoreResume(resume,needCreateResume).then(e => e.json());
            if(res.resume && needCreateResume){
                try{
                    const newPerson = new Person(res.resume);
                    window.localStorage.setItem('resume', JSON.stringify(newPerson))
                }finally {

                }
            }
            if (res.score) {
                setScore(res?.score);
                setAdvise(res?.advise)
            } else {
                setScore(0);
                setAdvise([
                    '我需要以更清晰的格式提供特定的技能、经验和其他相关信息来进行评估。'
                ])
            }
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
