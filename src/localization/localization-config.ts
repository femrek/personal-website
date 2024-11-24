import { initReactI18next } from "react-i18next";
import i18n, { Resource, ResourceLanguage } from "i18next";
import { defaultLanguage } from "./app-locales.ts";
import en from "./translation/en.ts";
import tr from "./translation/tr.ts";

export interface LocalizationResource extends ResourceLanguage {
  translation: {
    appTitle: string;
    header: {
      nav: {
        portfolio: string;
        contact: string;
      };
    };
    footer: {
      github: string;
    };
    portfolioPage: {
      imageViewer: {
        loading: string;
      };
    };
  };
}

interface LocalizationResources extends Resource {
  [key: string]: LocalizationResource;
}

const resources: LocalizationResources = {
  en: en,
  tr: tr,
};

i18n
  .use(initReactI18next)
  .init<LocalizationResources>({
    resources,
    fallbackLng: defaultLanguage.code,
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

const loc = i18n;

export default loc;
