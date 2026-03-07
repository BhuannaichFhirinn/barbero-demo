# barbero-demo

Interactive playground and documentation site for [barbero](https://www.npmjs.com/package/barbero) — the lightweight JavaScript boolean utility library.

🔗 **Live site**: [bhuannaichfhirinn.github.io/barbero-demo](https://bhuannaichfhirinn.github.io/barbero-demo)

---

## What it is

A single-page, zero-backend application that lets developers explore every exported barbero function, read its documentation, and evaluate it live in the browser with their own inputs. Every result comes from the real library — nothing is hardcoded.

---

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **Vuetify 3** — Material Design components
- **Vite** — dev server and build tool
- **pnpm** — package manager

---

## Running Locally

```bash
pnpm install
pnpm run dev       # dev server at http://localhost:8080/barbero-demo/
pnpm run build     # production build to dist/
pnpm run preview   # preview production build locally
```

---

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md).

---

## Related

- **barbero library**: [github.com/BhuannaichFhirinn/barbero](https://github.com/BhuannaichFhirinn/barbero)
- **NPM**: [npmjs.com/package/barbero](https://www.npmjs.com/package/barbero)

---

## License

MIT
