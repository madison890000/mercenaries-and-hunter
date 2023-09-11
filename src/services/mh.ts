import httpClient from "../utils/httpClient";

export const formatAndTranslateResume = async (text: any) => {
    return httpClient.post(`/chat/format-resume`, {
        content: JSON.stringify(text)
    }, {}).then(e => e.data)
}

export const scoreResume = async (resume: any, needCreateResume: boolean) => {
    return httpClient.post(`/chat/score-resume`, {
        content: resume,
        needCreateResume,
    }, {}).then(e => e?.data)
}
export const syncAccount = () => {
    return httpClient.post(`/rest/accounts/sync`, {}, {})
}
export const syncSends = (sends: any[]) => {
    return httpClient.post(`/rest/sends/sync`, {
        sends,
    }, {})
}

export const getUserInfo = () => {
    return httpClient.get(`/rest/accounts/user-info`, {}).then(e => e?.data)
}
export const getSendList = async () => {
    if (!chrome?.runtime) {
        return [];
    }
    return new Promise<any[]>(((resolve, reject) => {
        chrome?.runtime?.sendMessage(process.env.REACT_APP_EXTENSION_NAME, {
            args: ['send-list']
        }, res => {
            resolve(res.data);
        });
        setTimeout(() => {
            reject('time out')
        }, 30 * 1000)
    }))
}