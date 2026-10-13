import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        greenpulse: resolve(process.cwd(), 'greenpulse.html'),
        //hotelbooking: resolve(process.cwd(), 'hotel-booking-case-study.html'),
        hoteldashboard: resolve(process.cwd(), 'hotel-booking-dashboard.html'),
        triverse: resolve(process.cwd(), 'triverse-project.html'),
        simkost: resolve(process.cwd(), 'simkost-project.html'),
        awsarchitecture: resolve(process.cwd(), 'aws-cloud-architecture.html'),
        cgpa: resolve(process.cwd(), 'cgpa-prediction.html'),
        movierecommender: resolve(process.cwd(), 'movie-recommender.html')
      },
    },
  },
})
