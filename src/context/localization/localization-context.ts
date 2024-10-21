import React, { createContext, useContext } from "react";
import {
  LocalizationAction,
  LocalizationState,
} from "../../reducer/localization/localization-reducer.ts";

interface LocalizationContextData {
  langData?: LocalizationState;
  langDispatch: React.Dispatch<LocalizationAction>;
}

const initialData: LocalizationContextData = {
  langData: {},
  langDispatch: () => {},
};

const LocalizationContext = createContext(initialData);

function useLocalizationContext() {
  return useContext(LocalizationContext);
}

export default LocalizationContext;
export { useLocalizationContext };
export type { LocalizationContextData };
