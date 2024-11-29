import { LocalizationResource } from "../localization-config.ts";

const tr: LocalizationResource = {
  translation: {
    appTitle: import.meta.env.VITE_TITLE,
    header: {
      nav: {
        portfolio: "Portföy",
        contact: "İletişim",
      },
    },
    footer: {
      github: "Kaynak Kodu GitHub'da",
    },
    portfolioPage: {
      imageViewer: {
        loading: "Yükleniyor...",
      },
    },
    contactPage: {
      contactEntry: {
        copied: "Kopyalandı!",
      },
    },
  },
};

export default tr;
