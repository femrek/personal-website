import localizationActionTypes from "./localization-action-types.ts";
import AppLocales, {
  defaultLanguage,
  defaultLanguageIndex,
  LanguageType,
} from "../../localization/app-locales.ts";
import i18n from "../../localization/localization-config.ts";

interface LocalizationState {
  currentLang?: LanguageType;
  indexOfLocale?: number;
}

interface LocalizationAction {
  type: string;
  payload?: object;
}

function localizationReducer(
  state: LocalizationState,
  action: LocalizationAction,
): LocalizationState {
  switch (action.type) {
    case localizationActionTypes.loadFromStorage: {
      // Read the saved language from local storage
      const savedLangCode =
        localStorage.getItem("lang") ?? defaultLanguage.code;
      const savedIndex =
        AppLocales.findIndex((lang) => lang.code === savedLangCode) ??
        defaultLanguageIndex;

      // Change the language
      i18n.changeLanguage(AppLocales[savedIndex].code).then();

      return {
        ...state,
        currentLang: AppLocales[savedIndex],
        indexOfLocale: savedIndex,
      };
    }
    case localizationActionTypes.toggleLanguage: {
      const oldIndex = state.indexOfLocale ?? defaultLanguageIndex;
      const newIndex = (oldIndex + 1) % AppLocales.length;
      const newLang = AppLocales[newIndex];

      // Save the new language to local storage
      localStorage.setItem("lang", newLang.code);

      // Change the language
      i18n.changeLanguage(newLang.code).then();

      return {
        ...state,
        currentLang: newLang,
        indexOfLocale: newIndex,
      };
    }
    default:
      return state;
  }
}

export { localizationReducer };
export type { LocalizationState, LocalizationAction };
