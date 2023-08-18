export const formatAndTranslate = async (text: string) => {
    return fetch('http://8.222.156.60:8088/api/format-and-translate', {
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
    return fetch('http://localhost:3000/api/format-and-translate-resume', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: JSON.stringify(text)
        })
    }).then(e => e.json())
}

export const formatAndTranslateCV = async (resume: string, job: string, company: string) => {
    return fetch('http://localhost:3000/api/format-and-translate-cv', {
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
