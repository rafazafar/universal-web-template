# universal-web-template

Nuxt 4 + Nuxt UI ベースのダッシュボードテンプレートです。  
日本語をデフォルト言語にした多言語対応と、Nuxt i18n の SEO 設定を含みます。

[English README](./README-EN.md)

## 概要

- フレームワーク: Nuxt 4
- UI: `@nuxt/ui`
- i18n: `@nuxtjs/i18n`
- ユーティリティ: `@vueuse/nuxt`
- 可視化: `@unovis/vue`
- バリデーション: `zod`
- ダミー API: `server/api/*`

## 主な機能

- ダッシュボードホーム
- 受信トレイ UI
- 顧客一覧テーブル
- 設定ページ
- 日本語 / 英語 / フランス語 / ドイツ語
- `prefix_except_default` 戦略のルーティング
- `hreflang` / canonical / Open Graph locale を含む i18n SEO

## セットアップ

```bash
pnpm install
pnpm dev
```

## 利用可能なスクリプト

| コマンド | 内容 |
|---|---|
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | 本番ビルド |
| `pnpm preview` | ビルド結果のプレビュー |
| `pnpm typecheck` | Nuxt 型チェック |

補足:

- `postinstall` で `nuxt prepare` が実行されます。
- このリポジトリでは `pnpm` を前提にしています。

## i18n

現在の設定:

- デフォルトロケール: `ja`
- 対応ロケール: `ja`, `en`, `fr`, `de`
- メッセージファイル: [`i18n/locales`](/Users/rafazafar/dev/universal-web-template/i18n/locales)
- ルーティング戦略: `prefix_except_default`

例:

- 日本語: `/customers`
- 英語: `/en/customers`

## SEO

Nuxt i18n の `useLocaleHead()` を利用して、ロケール別 SEO を有効化しています。

- `html[lang]` / `dir`
- `hreflang`
- canonical
- `og:locale`

設定済みベース URL:

- `https://cis-internal.org`

変更する場合は [`nuxt.config.ts`](/Users/rafazafar/dev/universal-web-template/nuxt.config.ts) の `i18n.baseUrl` を更新してください。

## ディレクトリ構成

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

## ページ構成

- `/` ホーム
- `/inbox` 受信トレイ
- `/customers` 顧客管理
- `/settings` 設定
- `/settings/members`
- `/settings/notifications`
- `/settings/security`

## カスタマイズのポイント

- 文言追加: `i18n/locales/*.json`
- ロケール追加: `nuxt.config.ts` の `i18n.locales`
- SEO ベース URL 変更: `nuxt.config.ts` の `i18n.baseUrl`
- ダミーデータ変更: `server/api/*.ts`

## 注意

- このテンプレートにはサンプルデータとサンプル UI 文言が含まれます。
- 実運用前にブランド名、SEO 文言、OG 画像、API 実装を差し替えてください。
