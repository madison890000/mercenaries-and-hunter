import {IS_DEV} from "./environment";

export const API_DOMAIN =
    IS_DEV ?
        'http://localhost:8083'
        : `https://chat.mercenarieshunter.com`;