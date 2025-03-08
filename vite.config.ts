import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 用に `base` を設定
export default defineConfig({
  plugins: [react()],
  base: '/sample-github-pages/' // リポジトリ名を指定
});
