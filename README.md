# universal-web-template

Nuxt 4 ベースの管理画面テンプレートです。  
新人やジュニア開発者が、迷わず開発を始められるように作っています。

## このテンプレートでできること

- 管理画面の画面をすぐに作り始められる
- 多言語対応の画面を試せる
- ダミー API を使って画面開発を進められる
- 設定画面や一覧画面の土台を再利用できる

## 最初にやること

```bash
pnpm install
pnpm dev
```

開発サーバーが起動したら、ブラウザで表示された URL を開いてください。

## AI を使って開発するとき

- AI を使って開発する場合は、作業を始める前に必ず `pnpm install` を実行してください。
- このリポジトリには agent skill のセットアップが含まれています。
- Nuxt の開発を AI に依頼するときは、Nuxt skill を使うのがおすすめです。

## 環境変数について

- Nuxt は `.env` の値を自動で読み込みます。
- `NUXT_XXX` はサーバー側の設定に使います。
- `NUXT_PUBLIC_XXX` はクライアント側でも使う公開設定に使います。
- サンプルは [`.env.example`](/Users/rafazafar/dev/universal-web-template/.env.example) を見てください。

## よく使うコマンド

| コマンド | 使い道 |
|---|---|
| `pnpm dev` | 開発サーバーを起動する |
| `pnpm build` | 本番用にビルドする |
| `pnpm preview` | ビルド結果を確認する |
| `pnpm typecheck` | 型エラーを確認する |

## まず覚える場所

| 場所 | ここでやること |
|---|---|
| `app/pages/` | ページを作る |
| `app/components/` | 部品を作る |
| `server/api/` | ダミー API を編集する |
| `i18n/locales/` | 文言を変更する |
| `nuxt.config.ts` | 全体設定を変える |

## 詳しい説明

- 初期セットアップ: [`docs/getting-started.md`](/Users/rafazafar/dev/universal-web-template/docs/getting-started.md)
- フォルダ構成: [`docs/project-structure.md`](/Users/rafazafar/dev/universal-web-template/docs/project-structure.md)
- カスタマイズ方法: [`docs/customizing.md`](/Users/rafazafar/dev/universal-web-template/docs/customizing.md)
- AI コーディング用 PRD サンプル: [`docs/prd/sample-prd-ai-coding.md`](/Users/rafazafar/dev/universal-web-template/docs/prd/sample-prd-ai-coding.md)

## 補足

- パッケージマネージャーは `pnpm` 前提です。
- このテンプレートにはサンプル文言とサンプルデータが入っています。
- 本番利用前に、ブランド名や API 実装は差し替えてください。
