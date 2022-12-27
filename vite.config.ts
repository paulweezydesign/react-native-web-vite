import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'react-native': 'react-native-web',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
      '@react-native-community/async-storage': 'react-native-web-async-storage',
      'lottie-react-native': 'react-native-web-lottie',
      'react-native-svg': 'react-native-web-svg',
    },
  },
  plugins: [react()],
});
