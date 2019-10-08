import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEN from 'translations/en.json';
import translationVN from 'translations/vn.json';

const resources = {
  en: {
    translation: translationEN,
  },
  vn: {
    translation: translationVN,
  },
};

export const DEFAULT_LANG = 'en';

i18next
  .use(detector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANG,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export const i18n = i18next;
