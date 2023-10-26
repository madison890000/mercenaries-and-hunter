import enUS from './locales/en-US.json';
import zhCN from './locales/zh-CN.json';
import zhTW from './locales/zh-TW.json';
import deDE from './locales/de-DE.json';
import frFR from './locales/fr-FR.json';
import jaJP from './locales/ja-JP.json';
import koKR from './locales/ko-KR.json';

export type LocalesKey = 'en-US' | 'zh-CN' | 'zh-TW' | 'de-DE' | 'fr-FR' | 'ja-JP' | 'ko-KR';
export const locales: {
  [key in LocalesKey]: Record<string, string>;
} = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'de-DE': deDE,
  'fr-FR': frFR,
  'ja-JP': jaJP,
  'ko-KR': koKR
};

export const APP_LOCALES: {
  [key in LocalesKey]: string;
} = {
  'en-US': 'English',
  'zh-CN': '中文简体',
  'zh-TW': '中文繁体',
  'de-DE': 'Deutsch',
  'fr-FR': 'Français',
  'ja-JP': '日本語',
  'ko-KR': '한국인'
};

export const LANGUAGE_OPTIONS = Object.entries<string>(APP_LOCALES).map(([lKey, lValue]) => {
  return {
    label: lValue,
    value: lKey
  } as { label: string; value: LocalesKey };
});
