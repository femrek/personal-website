import { LocalizationResource } from "./localization-config.ts";

const localeKeys: LocalizationResource = {
  translation: {
    appTitle: "appTitle",
    header: {
      nav: {
        portfolio: "header.nav.portfolio",
        contact: "header.nav.contact",
      },
    },
    footer: {
      github: "footer.github",
    },
    portfolioPage: {
      imageViewer: {
        loading: "portfolioPage.imageViewer.loading",
      },
    },
    contactPage: {
      contactEntry: {
        copied: "contactPage.contactEntry.copied",
      },
    },
  },
};

const locKeys = localeKeys.translation;

export default locKeys;
