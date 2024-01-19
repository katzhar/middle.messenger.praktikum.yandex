import handlebars from 'vite-plugin-handlebars'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const routes = {
  '/index.html': {
    title: 'Sign In'
  },
  '/nested/signin.html': {
    title: 'Sign In'
  },
  '/nested/signup.html': {
    title: 'Sign Up'
  },
  '/nested/chats.html': {
    title: 'Chats'
  },
  '/nested/profile.html': {
    title: 'Profile'
  },
  '/nested/404.html': {
    title: '404'
  },
  '/nested/server-error.html': {
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
        nested: resolve(__dirname, 'src/nested/index.html')
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
