# Security Policy

## Scope

Barbero Demo is a static single-page application hosted on GitHub Pages. It has no backend, no server, no database, no authentication, and no user accounts. It makes no network requests at runtime.

The primary security consideration specific to this site is the use of `new Function()` to evaluate user-typed expressions in the live function cards. This is intentional and documented in the source code — the site is a local browser-side playground, no input is transmitted or stored anywhere.

Security issues most likely to be relevant:

- **Dependency vulnerabilities** — Vue, Vuetify, Vite, or their transitive dependencies
- **Build toolchain issues** — vulnerabilities introduced via the build process or GitHub Actions
- **Content injection** — unexpected rendering of user input through Vue's template engine

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Please report privately using one of the following methods:

1. **GitHub Private Advisory** (preferred): [Open a draft security advisory](https://github.com/BhuannaichFhirinn/barbero-demo/security/advisories/new)
2. **Direct contact**: Message the maintainer via GitHub ([@BhuannaichFhirinn](https://github.com/BhuannaichFhirinn))

### What to include

- A clear description of the vulnerability
- Steps to reproduce or a minimal example
- The potential impact you see
- Which dependency or component is affected, if known

### What to expect

- Acknowledgement within **5 business days**
- A status update within **14 days** indicating whether the report has been accepted
- Credit in the release notes if a fix is deployed (unless you prefer to remain anonymous)
