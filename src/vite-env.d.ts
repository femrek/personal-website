/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEBSITE_API_HOST: string;
  readonly VITE_WEBSITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
