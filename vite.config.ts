import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./public/about.html', import.meta.url)),
        presidentMessage: fileURLToPath(new URL('./public/president-message.html', import.meta.url)),
        secretaryMessage: fileURLToPath(new URL('./public/secretary-message.html', import.meta.url)),
        executiveCommittee: fileURLToPath(new URL('./public/executive-committee.html', import.meta.url)),
        subcommittees: fileURLToPath(new URL('./public/subcommittees.html', import.meta.url)),
        members: fileURLToPath(new URL('./public/members.html', import.meta.url)),
        notices: fileURLToPath(new URL('./public/notices.html', import.meta.url)),
        news: fileURLToPath(new URL('./public/news.html', import.meta.url)),
        events: fileURLToPath(new URL('./public/events.html', import.meta.url)),
        gallery: fileURLToPath(new URL('./public/gallery.html', import.meta.url)),
        formsDownloads: fileURLToPath(new URL('./public/forms-downloads.html', import.meta.url)),
        articles: fileURLToPath(new URL('./public/articles.html', import.meta.url)),
        articleDetail: fileURLToPath(new URL('./public/article-detail.html', import.meta.url)),
        contact: fileURLToPath(new URL('./public/contact.html', import.meta.url)),
      },
    },
  },
});
