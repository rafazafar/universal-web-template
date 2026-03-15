# universal-web-template

A dashboard template built with Nuxt 4 and Nuxt UI.  
It includes multilingual support with Japanese as the default language and locale-aware SEO via Nuxt i18n.

[日本語 README](./README.md)

## Overview

- Framework: Nuxt 4
- UI: `@nuxt/ui`
- i18n: `@nuxtjs/i18n`
- Utilities: `@vueuse/nuxt`
- Charts: `@unovis/vue`
- Validation: `zod`
- Mock APIs: `server/api/*`

## Features

- Dashboard home
- Inbox UI
- Customer table
- Settings pages
- Japanese / English / French / German
- `prefix_except_default` localized routing
- i18n SEO with `hreflang`, canonical, and Open Graph locale tags

## Setup

```bash
pnpm install
pnpm dev
```

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview the production build |
| `pnpm typecheck` | Run Nuxt type checking |

Notes:

- `postinstall` runs `nuxt prepare`.
- This repository assumes `pnpm`.

## i18n

Current setup:

- Default locale: `ja`
- Supported locales: `ja`, `en`, `fr`, `de`
- Message files: [`i18n/locales`](/Users/rafazafar/dev/universal-web-template/i18n/locales)
- Routing strategy: `prefix_except_default`

Examples:

- Japanese: `/customers`
- English: `/en/customers`

## SEO

Locale-aware SEO is enabled through Nuxt i18n `useLocaleHead()`.

- `html[lang]` / `dir`
- `hreflang`
- canonical
- `og:locale`

Configured base URL:

- `https://cis-internal.org`

If you need to change it, update `i18n.baseUrl` in [`nuxt.config.ts`](/Users/rafazafar/dev/universal-web-template/nuxt.config.ts).

## Project Structure

```text
app/
  app.vue
  components/
  composables/
  layouts/
  pages/
  assets/
server/
  api/
i18n/
  locales/
nuxt.config.ts
```

## Routes

- `/` Home
- `/inbox` Inbox
- `/customers` Customers
- `/settings` Settings
- `/settings/members`
- `/settings/notifications`
- `/settings/security`

## Customization

- Add or update copy: `i18n/locales/*.json`
- Add locales: `i18n.locales` in `nuxt.config.ts`
- Change SEO base URL: `i18n.baseUrl` in `nuxt.config.ts`
- Replace mock data: `server/api/*.ts`

## Notes

- This template includes sample content and sample UI copy.
- Before production use, replace branding, SEO metadata, OG images, and mock API implementations as needed.
