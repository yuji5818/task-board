# タスクボード

React (Vite) 製のシンプルなタスクボードアプリ。

## 機能

- テキスト入力でタスクを追加
- チェックボックスで完了・未完了を切り替え
- タスクを削除
- 完了済みタスクはグレー表示
- `localStorage` によりリロードしてもタスクが消えない

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

`dist/` に静的ファイルが出力されます。

## GitHub Pages への公開

`main` ブランチに push すると、GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) が自動でビルドし、GitHub Pages にデプロイします。

初回のみ、リポジトリの **Settings > Pages** で **Source** を **GitHub Actions** に設定してください。

公開後の URL: https://yuji5818.github.io/task-board/
