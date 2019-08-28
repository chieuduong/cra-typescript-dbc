import i18next from 'i18next';
import detector from 'i18next-browser-languagedetector';
// import { reactI18nextModule } from 'react-i18next';
import translationEN from 'translations/en.json';
import translationFR from 'translations/vn.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

export const DEFAULT_LANG = 'vn';

i18next
  .use(detector)
  // .use(reactI18nextModule)
  .init({
    fallbackLng: DEFAULT_LANG,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export const i18n = i18next;
