import { IAppliedInExtension } from '../types';


export const getSendList = async () => {
  if (!chrome?.runtime) {
    return [
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
  return !!chrome?.runtime;
};