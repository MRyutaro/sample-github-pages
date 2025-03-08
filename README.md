# sample-github-pages

## デプロイ前準備

1. プロジェクトの初期化
```
npm create vite@latest
```

2. ライブラリのインストール

```
npm install gh-pages --save-dev
```

3. package.jsonの修正
```
{
  "name": "sample-github-pages",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://mryutaro.github.io/sample-github-pages/",
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.21.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.21.0",
    "eslint-plugin-react-hooks": "^5.1.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "gh-pages": "^6.3.0",
    "globals": "^15.15.0",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.24.1",
    "vite": "^6.2.0"
  }
}
```

4. vite.config.tsの修正
```vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages 用に `base` を設定
export default defineConfig({
  plugins: [react()],
  base: '/sample-github-pages/' // リポジトリ名を指定
});
```

5. git pushする

## デプロイ方法
```
npm run deploy
```
