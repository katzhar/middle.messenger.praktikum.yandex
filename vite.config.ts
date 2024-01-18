import handlebars from 'vite-plugin-handlebars'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const routes = {
  '/signin.html': {
    title: 'Sign In'
  },
  '/signup.html': {
    title: 'Sign Up'
  },
  '/chats.html': {
    title: 'Chats'
  },
  '/profile.html': {
    title: 'Profile'
  },
  '/404.html': {
    title: '404'
  },
  '/server-error.html': {
    title: 'Server Error'
  }
}

export default defineConfig({
  base: '/',
  root: resolve(__dirname, 'src/pages'),
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
