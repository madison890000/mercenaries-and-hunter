import {scoreResume} from "../services/mh";
import globalStore from "../lib/GlobalData";
import {ADVISE_KEY, SCORE_KEY} from "../constants/StoreKeys";
import {useMutation} from "@tanstack/react-query";
import {LocalesKey} from "../i18n/languages";

export function useScore() {
    const {
        isLoading,
        error,
        data,
        mutate
    } = useMutation({
        mutationFn: ({resume, locale}: {
            resume: any,
            locale: LocalesKey
        }) =>
            scoreResume(resume, locale),
        onSuccess: (res) => {
            if (res.score) {
                globalStore.save(SCORE_KEY, res?.score);
                globalStore.save(ADVISE_KEY, res?.advise);
            }
        }
    })
    return {
        mutate,
        error,
        isLoading,
        score: data?.score ?? globalStore.get(SCORE_KEY) ?? 0,
        advise: data?.advise ?? globalStore.get(ADVISE_KEY) as string[] ?? [],
    }
}
