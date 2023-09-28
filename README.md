# Mercenaries And Hunter

## Description

This is a personal project which is trying to help soft engineers finding jobs easier.

https://www.mercenarieshunter.com/

## RoadMap

- [x] (AI Score you resume)
- [x] (Applied List)
- [x] (Auto Cover Letter)
- [x] (Translate and Format Tone)


## For development

### Requirement

- node > 16.19.0
- npm

### Development locally

```
npm run start
```

it will use PORT 8000 to start a local web application.
check by:

- http://localhost:8000
- http://0.0.0.0:8000
- http://127.0.0.1:8000


default, it will use local Back-End endpoints:

```
export const API_DOMAIN =
    IS_DEV ?
        'http://localhost:8083'
        : `https://chat.mercenarieshunter.com`;
```
if you don't have the Back-End local environment, you can switch to online endpoint
by editing AIP_DOMAIN in `/src/constants/domain.ts`.

```
export const API_DOMAIN = `https://chat.mercenarieshunter.com`;
```

### Technical Stack

- React (18)
- Typescript (4.9)
- CRA (create react app)
- Jest (test)
- Google Oauth2 Login
- React-query (v4)

### Project Folder Explanation

```
/src
    /components  // React pure function components
    /constants   // constant variables and magic numbers
    /contexts    // React Contexts
    /CronJobs    // user-info sync job 
    /hooks       // React hooks
    /i18n
    /layouts
    /lib         // data in localStorage
    /modules     // React function components with Effects
    /pages
    /services    // all endpoints
    /utils
    
    index.tsx    // entry file for React
    Routes.tsx   // all routes for React-Router
    types.ts     // shared interfaces and types,including enums
```

### Statement Manager Tools 

React Context

### Http requests

- 1.Axios + React-Query
- 2.fetch + React-Query

### i18n

react-intl

### router

react-router v6

### UI

- MUI
- antd
