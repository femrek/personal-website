import { LocalizationResource } from "./localization-config.ts";

const localeKeys: LocalizationResource = {
  translation: {
    appTitle: "appTitle",
    header: {
      nav: {
        home: "header.nav.home",
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
  },
};

const locKeys = localeKeys.translation;

export default locKeys;
