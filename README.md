# Personal Website

Basic website template for personal use. Presenting a home page, portfolio page, and contact page. Allows to fetch data
from another host.

No stable version yet. Any major changes can be made.

- [Features](#features)
- [Used Technologies](#used-technologies)
- [Run with Sample Data](#run-with-sample-data)
    - [To run the app in development mode](#to-run-the-app-in-development-mode)
    - [To run in production mode](#to-run-in-production-mode)
- [Environment Setup](#environment-setup)
- [Installation](#installation)
- [License](#license)

## Screen Shots

<img width="580" alt="Screenshot 2024-12-05 at 17 37 39" src="https://github.com/user-attachments/assets/d54ec016-cec6-477f-8d05-538e0ca4eb1f">
<img width="180" alt="Screenshot 2024-12-05 at 17 37 30" src="https://github.com/user-attachments/assets/542e6ff2-5f7a-446f-8c70-2fe7ec4a34b2">

## Features

- <strong>Localization:</strong>
  The app supports localized content. By default, it supports English and Turkish.

## Used Technologies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [React i18next](https://react.i18next.com/)

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

## License

```
MIT License

Copyright (c) 2024 Faruk Emre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
