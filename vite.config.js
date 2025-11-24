import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⚠️ 重要：請將 'vibetravel' 改成您在 GitHub 上建立的 Repository 名稱
  // 如果您的專案名稱就是 vibetravel，則保持原樣即可
  // 注意：前後都要有斜線 '/'
  base: '/vibetravel/', 
})