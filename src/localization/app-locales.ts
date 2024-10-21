interface LanguageType {
  code: string;
  shortName: string;
  name: string;
}

const AppLocales: LanguageType[] = [
  {
    code: "en",
    shortName: "EN",
    name: "English",
  },
  {
    code: "tr",
    shortName: "TR",
    name: "Türkçe",
  },
];

const defaultLanguageIndex: number = 0;
const defaultLanguage: LanguageType = AppLocales[defaultLanguageIndex];

export default AppLocales;
export { defaultLanguageIndex, defaultLanguage };
export type { LanguageType };
