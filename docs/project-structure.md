# Project Structure

## 全体イメージ

このプロジェクトは、画面を作る場所と、ダミー API を置く場所が分かれています。

## よく触るフォルダ

| パス | 役割 |
|---|---|
| `app/pages/` | URL に対応するページを置く |
| `app/components/` | 再利用する UI 部品を置く |
| `app/layouts/` | 画面全体のレイアウトを置く |
| `app/composables/` | 再利用するロジックを置く |
| `server/api/` | 開発用の API を置く |
| `i18n/locales/` | 多言語の文言ファイルを置く |
| `public/` | 画像などの静的ファイルを置く |

## まずはここだけ覚えれば十分

### 画面を追加したい

`app/pages/` を見る

### ボタンやカードなどの部品を作りたい

`app/components/` を見る

### API の返り値を変えたい

`server/api/` を見る

### 文章を変更したい

`i18n/locales/` を見る

### アプリ全体の設定を変えたい

`nuxt.config.ts` を見る
