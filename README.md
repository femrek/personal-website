# Personal Website

Basic website template for personal use. Presenting a home page, portfolio page, and contact page. Allows to fetch data
from another host.

No stable version yet. Any major changes can be made.

## Index

- [Features](#features)
- [Run with Sample Data](#run-with-sample-data)
    - [To run the app in development mode](#to-run-the-app-in-development-mode)
    - [To run in production mode](#to-run-in-production-mode)
- [Environment Setup](#environment-setup)
- [Installation](#installation)
- [Used Technologies](#used-technologies)
- [License](#license)

## Features

- <strong>Localization:</strong>
  The app supports localized content. By default, it supports English and Turkish.

## Run with Sample Data

The app includes dummy data in `public` folder. If, the `VITE_API_HOST` is not set in the environment file, the app will
use the dummy data.

```bash
git clone https://github.com/femrek/personal-website.git
cd personal-website
npm install
````

### To run the app in development mode:

```bash
npm run dev
```

### To run in production mode:

#### Install `serve` package globally, if not installed:

```bash
npm install -g serve
```

#### Build and serve the app

```bash
npm run build
serve dist
```

## Environment Setup

Example `.env.developement.local` file for `npm run dev` or `.env.production.local` file for `npm run build`

```
VITE_API_HOST=http://localhost:5173
VITE_TITLE=Title
```

## Installation

Will be added.

## Used Technologies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [React i18next](https://react.i18next.com/)

## License

Will be added.
