export const API_DOMAIN =
    process.env.NODE_ENV === 'development' ?
        'http://localhost:8083'
        : `https://chat.mercenarieshunter.com`;