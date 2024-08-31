import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

console.log("Loaded Environment Variables:", process.env);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
