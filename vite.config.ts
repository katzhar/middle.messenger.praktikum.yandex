import handlebars from 'vite-plugin-handlebars'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const routes = {
  '/index.html': {
    title: 'Sign In'
  },
  '/pages/signup.html': {
    title: 'Sign Up'
  },
  '/pages/chats.html': {
    title: 'Chats'
  },
  '/pages/profile.html': {
    title: 'Profile'
  },
  '/pages/404.html': {
    title: '404'
  },
  '/pages/server-error.html': {
    title: 'Server Error'
  }
}

export default defineConfig({
  base: '/',
  root: resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        pages: resolve(__dirname, 'src/pages/index.html')
      }
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/partials'),
      context(page) {
        return routes[page]
      }
    })
  ]
})
