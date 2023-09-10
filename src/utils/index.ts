export {default as capitalize} from './capitalize'
export * from './date'
export * from './device'
export {default as pipe} from './pipe'
export * from './suffix'



export const hasResume = ()=>{
    return  window.localStorage.getItem('resume') !== null
}

export const getGoogleToken = () => {
    // @ts-ignore
    return window.localStorage.getItem('google-token');
}