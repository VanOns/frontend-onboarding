import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePluginSvgSpritemap('./src/icons/*.svg'),
    ],
})
