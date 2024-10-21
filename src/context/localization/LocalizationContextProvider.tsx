import React, { useEffect, useReducer } from "react";
import LocalizationContext, {
  LocalizationContextData,
} from "./localization-context.ts";
import {
  localizationReducer,
  LocalizationState,
} from "../../reducer/localization/localization-reducer.ts";
import localizationActionTypes from "../../reducer/localization/localization-action-types.ts";

const initialState: LocalizationState = {};

interface ProviderProps {
  children: React.ReactNode;
}

const LocalizationContextProvider = ({ children }: ProviderProps) => {
  const [lang, langDispatch] = useReducer(localizationReducer, initialState);

  const data: LocalizationContextData = {
    langData: lang,
    langDispatch: langDispatch,
  };

  useEffect(() => {
    langDispatch({ type: localizationActionTypes.loadFromStorage });
  }, []);

  return (
    <LocalizationContext.Provider value={data}>
      {children}
    </LocalizationContext.Provider>
  );
};

export { LocalizationContextProvider };
