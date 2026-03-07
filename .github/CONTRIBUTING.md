# Contributing to Barbero Demo

Thank you for considering a contribution to Barbero Demo. This guide covers everything you need to get started.

Barbero Demo is the interactive playground and documentation site for the [barbero](https://github.com/BhuannaichFhirinn/barbero) library. It is a static Vue 3 single-page application hosted on GitHub Pages — there is no backend, no database, and no build server.

---

## Ways to Contribute

- **Bug reports** — open an issue using the Bug Report template
- **Feature suggestions** — open an issue using the Feature Suggestion template
- **Code** — UI fixes, new function cards, accessibility improvements, or styling changes
- **Function cards** — keep the demo in sync when new barbero functions are released

---

## Getting Started

```bash
git clone https://github.com/BhuannaichFhirinn/barbero-demo.git
cd barbero-demo
pnpm install
pnpm run dev       # dev server at http://localhost:8080/barbero-demo/
```

```bash
pnpm run build     # production build — must complete cleanly before opening a PR
pnpm run preview   # preview the production build locally
```

---

## Adding a New Function Card

When a new version of barbero ships new functions, the demo site must be updated to reflect them:

1. Update barbero to the latest version: `pnpm add barbero@latest`
2. Import the new function(s) at the top of `src/data/functions.js`
3. Add entries to the appropriate module block in the `modules` array
4. Verify the card renders and evaluates correctly in the browser

Each function entry must include `name`, `signature`, `description`, `inputs`, `fn`, and `example`. No hardcoded results — `fn` must point to the real imported barbero function.

---

## Code Conventions

- **Vue 3 Composition API** with `<script setup>` — no Options API
- **Scoped styles** in every component (`<style scoped>`)
- **Vuetify** component and utility classes for layout and UI — avoid custom CSS where Vuetify covers it
- **Plain JavaScript** — no TypeScript
- **PascalCase** for component filenames, **camelCase** for data and utility files

---

## Submitting a Pull Request

1. Fork the repository and create your branch from `main`
2. Make your changes following the conventions above
3. Run `pnpm run build` and confirm it completes without errors
4. Test in the browser — verify function cards evaluate correctly and the layout holds on mobile
5. Open a pull request — fill in the PR template completely

---

## Code of Conduct

All contributors are expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).
