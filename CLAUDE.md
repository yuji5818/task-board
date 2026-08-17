# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code (claude.ai/code) に向けたガイダンスです。

## プロジェクト概要

React (Vite) 製のシンプルなタスクボードアプリ。テキスト入力でのタスク追加、チェックボックスによる完了/未完了の切り替え、タスク削除、完了済みタスクのグレー表示に対応。

## Git運用ルール

- **コードに変更を加えるたびに、必ずコミットして GitHub にプッシュすること。**
  変更を作業ツリーに残したまま次のタスクに進まない。1つの変更（機能追加・修正・リファクタなど）が完了した時点でコミット→プッシュまでを1セットとして扱う。
- コミット前に `git status` / `git diff` で変更内容を確認する。
- コミットメッセージは変更内容が分かるように具体的に書く（例: `Fix: タスク削除時のバリデーションエラーを修正`）。
- 意味のある単位でコミットを分割し、無関係な変更を1つのコミットにまとめない。
- push 先のブランチ・リモートに疑問がある場合は、実行前にユーザーに確認する。
- force push (`git push --force` など) や履歴を書き換える操作は、ユーザーの明示的な指示がない限り行わない。
- `.gitignore` に含めるべきファイル（依存関係、ビルド成果物、環境変数ファイルなど）は事前に整理し、誤ってコミットしない。

## 開発コマンド

- `npm install` — 依存関係のインストール
- `npm run dev` — 開発サーバー起動 (Vite)
- `npm run build` — 本番ビルド
- `npm run lint` — oxlint による Lint
- `npm run preview` — ビルド成果物のプレビュー

## アーキテクチャ

- `src/App.jsx` — タスク一覧の状態管理（追加・切り替え・削除）。`localStorage` に永続化。
- `src/components/TaskForm.jsx` — タスク追加用の入力フォーム。
- `src/components/TaskList.jsx` — タスク一覧の表示。
- `src/components/TaskItem.jsx` — 個々のタスク行（チェックボックス・削除ボタン）。完了済みは `task-item--completed` クラスでグレー表示。
- `src/App.css` / `src/index.css` — スタイル。

## デプロイ (GitHub Pages)

- `vite.config.js` の `base` はリポジトリ名 `/task-board/` に固定してある（公開URL: https://yuji5818.github.io/task-board/）。リポジトリ名を変更した場合はここも合わせて変更すること。
- `main` への push をトリガーに `.github/workflows/deploy.yml` が `npm run build` → GitHub Pages へデプロイする。
- 初回のみ GitHub 側で Settings > Pages > Source を「GitHub Actions」に設定する必要がある（コマンドラインからは設定不可、ユーザー操作が必要）。
