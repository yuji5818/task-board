import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages ではリポジトリ名がパスに含まれるため base を合わせる
  // 公開URL: https://yuji5818.github.io/task-board/
  base: '/task-board/',
  plugins: [react()],
})
