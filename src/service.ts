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

export const openTranslate = async () => {
    const res = await chrome?.runtime?.sendMessage({
        args: ['open-translate']
    });
    return res;
}

export const closeTranslate = async () => {
    const res = await chrome?.runtime?.sendMessage({
        args: ['close-translate']
    });
    return res;
}
export const changeTranslateTo = async (to: any) => {
    const res = await chrome?.runtime?.sendMessage({
        args: ['change-translate', to]
    });
    return res;
}
export const getTranslateConfig = async () => {
    const res = await chrome?.runtime?.sendMessage({
        args: ['get-translate-config']
    });
    return res;
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