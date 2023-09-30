import axios, {AxiosError} from "axios";
import {API_DOMAIN} from "../constants/domain";
import globalStore from "../lib/GlobalData";
import {GOOGLE_TOKEN_KEY} from "../constants/StoreKeys";

const httpClient = axios.create({
    baseURL: API_DOMAIN,
})

const handleResponse = function (response: any) {
    return response;
}

const handleError = function (error: AxiosError) {
    return Promise.reject(error);
}
httpClient.interceptors.request.use((req) => {
    const token = globalStore.get(GOOGLE_TOKEN_KEY);
    if (token) {
        req.headers.set('authorization', `Bearer ${token}`);
    }
    return req
})
httpClient.interceptors.response.use(handleResponse, handleError);

export default httpClient