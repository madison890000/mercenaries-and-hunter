import { IAppliedInExtension } from '../types';


export const getSendList = async () => {
  if (!chrome?.runtime) {
    return [
      {
        "id": "2024-04-24T10:33:39.801Z0.868",
        "originUrl": "http://localhost:8000/#/",
        "site": "http://localhost:8000/#/",
        "time": "2024-04-24T10:33:39.800Z",
        "title": "M&H"
      },
      {
        "id": "2024-04-24T10:34:39.801Z0.868",
        "originUrl": "http://localhost:8000/#/",
        "site": "http://localhost:8000/#/",
        "time": "2024-04-24T10:33:39.800Z",
        "title": "M&H"
      },
      {
        "id": "2024-04-24T10:35:39.801Z0.868",
        "originUrl": "http://localhost:8000/#/",
        "site": "http://localhost:8000/#/",
        "time": "2024-04-24T10:33:39.800Z",
        "title": "M&H"
      },

    ];
  }
  return new Promise<IAppliedInExtension[]>((resolve, reject) => {
    chrome?.runtime?.sendMessage(
      process.env.REACT_APP_EXTENSION_NAME,
      {
        args: ['send-list']
      },
      res => {
        resolve(res.data);
      }
    );
    setTimeout(() => {
      reject('time out');
    }, 30 * 1000);
  });
};

export const hasInstallChromeExtension = () => {
  return true ||!!chrome?.runtime;
};