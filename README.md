# React Arch MUI

React Typescript App architecture with React Context API, i18n and MUI

Demo : https://ainaerik.github.io/react-arch-mui/

---

## Included

- Role-based authorization
- Internationalization using i18next and [React i18next](https://react.i18next.com/)
- Theming and Theme switching with [MUI](https://mui.com)
- Module import resolver `tsconfig.paths.json`
- Lazy load components
- LocaleProvider for date & time

---

## Source Folder Structure

```sh
|- public/
|- src/
| |- assets/       application resources as css, images, locales,...
| |- components/   reusable and custom components.
| |- contexts/     application contexts using React Context API.
| |- hooks/        custom hooks.
| |- pages/        all application pages should inside this folder.
| |- providers/    application provider, implementation of context defined in `contexts/` folder.
| |- routes/       application routes definition and route access management.
| |- services/     all application services, dependency injection.
| |- themes/       application themes.
| |- types/        enum, function, hooks types definition.
| |- utils/        utility functions.
| |- App.tsx       main app
| |- index.tsx     entrypoint
```

---

## Setup

To setup a local development :

- Rename `.env.dev` file to `.env`

- Then, run the following commands

  ```sh
  yarn install
  yarn start
  ```

---

## Author

Ny Aina Erick

[https://ainaerik.github.io](https://ainaerik.github.io)
