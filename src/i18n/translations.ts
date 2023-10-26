import { APP_LOCALES, locales, LocalesKey } from './languages';

export const generatedTranslations = () => {
  const translations = {} as unknown as { [key in LocalesKey]: Record<string, string> };
  for (const key of Object.keys(APP_LOCALES)) {
    try {
      translations[key as LocalesKey] = locales[key as LocalesKey];
    } catch {
      console.warn(`Can't find translations for ${key}`);
    }
  }
  return translations;
};
