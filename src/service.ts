export const formatAndTranslate = async (text: string) => {
    return fetch('https://chat.mercenarieshunter.com/api/format-and-translate', {
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
    return fetch('https://chat.mercenarieshunter.com/api/format-and-translate-resume', {
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
    return fetch('https://chat.mercenarieshunter.com/api/score-resume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: JSON.stringify(resume),
            needCreateResume,
        })
    })
}

export const formatAndTranslateCV = async (resume: string, job: string, company: string) => {
    return fetch('https://chat.mercenarieshunter.com/api/format-and-translate-cv', {
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


// const port = chrome.runtime.connect({name: "popup"});
export const getSendList = async () => {
    const res = await chrome?.runtime?.sendMessage({
        args: ['send-list']
    });
    return res.data;
}

export const addSend = async (site: string, config: any) => {
    const res = await chrome?.runtime?.sendMessage({
        args: ['add-site', site, config]
    });
    return res.data;
}
export const hasSite = async (site: string) => {
    const res = await chrome?.runtime?.sendMessage({
        args: ['has-site', site]
    });
    return res.data;
}
export const removeSend = async (site: string) => {
    const res = await chrome?.runtime?.sendMessage({
        args: ['remove-site', site]
    });
    return res.data;
}