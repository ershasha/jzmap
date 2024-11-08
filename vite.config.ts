import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import jzmap from 'vite-plugin-cesium';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), jzmap()],
  resolve: {
    alias: {
      // 配置别名
      '@': path.resolve(__dirname, './src'),
      'assets':path.resolve(__dirname,'./src/assets'),
      'lib':path.resolve(__dirname,'./src/lib/img')
    }
  },
})
