import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
    fs: {
      allow: [
        "/data/data/com.termux/files/home/node_modules/"
      ],
    },
  }
});
