export {default as capitalize} from './capitalize'

export const getGoogleToken = () => {
    // @ts-ignore
    return window.localStorage.getItem('google-token');
}