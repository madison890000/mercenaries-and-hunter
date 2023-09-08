export const formatAndTranslate = async (text: string) => {
    return fetch('https://chat.mercenarieshunter.com/chat/format-and-translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: text
        })
    })
}

export const formatAndTranslateResume = async (text: any) => {
    return fetch('https://chat.mercenarieshunter.com/chat/format-resume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: JSON.stringify(text)
        })
    }).then(e => e.json())
}

export const scoreResume = async (resume: any, needCreateResume: boolean) => {
    return fetch('https://chat.mercenarieshunter.com/chat/score-resume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: resume,
            needCreateResume,
        })
    })
}

export const formatAndTranslateCV = async (resume: string, job: string, company: string) => {
    return fetch('https://chat.mercenarieshunter.com/chat/write-cl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            resume,
            job,
            company,
        })
    })
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