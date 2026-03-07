## Summary

What does this PR do? Link to the relevant issue if one exists.

Closes #

---

## Type of Change

- [ ] Bug fix
- [ ] New function card(s)
- [ ] UI / styling improvement
- [ ] Accessibility improvement
- [ ] Documentation update
- [ ] Dependency update (e.g. new barbero version)
- [ ] Build / config change

---

## Checklist

### Function Cards
- [ ] Every new or updated function card evaluates live via the real barbero function — no hardcoded results
- [ ] `src/data/functions.js` is complete for the installed version of barbero
- [ ] `fn` points to the imported barbero function, not a local reimplementation

### Code Quality
- [ ] Vue 3 Composition API with `<script setup>` used throughout
- [ ] Styles are scoped — no global CSS leaking between components
- [ ] No TypeScript, no Options API

### Build & Testing
- [ ] `pnpm run build` completes without errors
- [ ] Function cards render and evaluate correctly in the browser
- [ ] Layout is usable on mobile screen sizes

### Breaking Changes
- [ ] This PR contains no regressions to existing function cards
- [ ] If it does, regressions are explicitly described below

---

## Screenshots (if applicable)

_Before / after screenshots for any visible UI changes._

---

## Additional Notes

_Anything else the reviewer should know._
