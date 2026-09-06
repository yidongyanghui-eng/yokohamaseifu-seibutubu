# 清風高校 生物部 公式紹介サイト

横浜清風高校の生物部を紹介する、依存関係のない静的サイトです。

## ファイル構成

- `index.html`: ページ本体
- `styles/main.css`: レスポンシブ対応のスタイル
- `scripts/main.js`: モバイルメニュー、スクロール演出、画像モーダル
- `images/`: 部活動写真の差し替え先

## ローカルで確認する

HTML ファイルをブラウザで直接開くか、リポジトリのルートで次のコマンドを実行してください。

```sh
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開くと確認できます。

VS Code のポート転送が有効な場合は、ポート `8000` をブラウザで開くことで、ファイルをダウンロードせずにプレビューできます。

## GitHub Pages

GitHub リポジトリの **Settings > Pages** から、公開元に `main` ブランチのルートディレクトリを指定してください。画像を掲載する際は、本人と保護者の許可および学校の公開方針を確認してください。

ページ内の QR コードは、GitHub Pages の公開 URL `https://yidongyanghui-eng.github.io/yokohamaseifu-seibutubu/` を開く設定です。GitHub Pages を有効にした後、スマートフォンのカメラで読み取ってください。
