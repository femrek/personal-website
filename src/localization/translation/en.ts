import { LocalizationResource } from "../localization-config.ts";

const en: LocalizationResource = {
  translation: {
    appTitle: import.meta.env.VITE_TITLE,
    header: {
      nav: {
        portfolio: "Portfolio",
        contact: "Contact",
      },
    },
    footer: {
      github: "Open Source on GitHub",
    },
    portfolioPage: {
      imageViewer: {
        loading: "Loading...",
      },
    },
    contactPage: {
      contactEntry: {
        copied: "Copied!",
      },
    },
  },
};

export default en;
