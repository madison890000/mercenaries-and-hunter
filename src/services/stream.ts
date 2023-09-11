import {API_DOMAIN} from "../constants/domain";
import {getGoogleToken} from "../utils";


export const formatAndTranslate = async (text: string) => {
    return fetch(`${API_DOMAIN}/chat/format-and-translate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getGoogleToken()}`
        },
        body: JSON.stringify({
            content: text
        })
    })
}
export const formatAndTranslateCV = async (resume: string, job: string, company: string) => {
    return fetch(`${API_DOMAIN}/chat/write-cl`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${getGoogleToken()}`
        },
        body: JSON.stringify({
            resume,
            job,
            company,
        })
    })
}