import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: "/Neighbourmart/",  // 👈 Add this line (use exact repo name)
  plugins: [react()],
});
