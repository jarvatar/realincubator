/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#36aef6',
          500: '#0c96e6',
          600: '#0078c9',
        },
        secondary: {
          400: '#a48afc',
          500: '#8a5cf7',
          600: '#793aee',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s infinite',
        'slide-down': 'slideDown 1.8s cubic-bezier(0.22, 1, 0.36, 1)',
        'slow-shimmer': 'slowShimmer 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 6s ease-in-out infinite',
        'feature-fade-in': 'featureFadeIn 2s ease-out forwards',
        'soft-bounce': 'softBounce 2s ease-in-out infinite',
        'slow-spin': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '10%': { transform: 'translateY(-90%)', opacity: 0.1 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slowShimmer: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7, filter: 'brightness(1.2) saturate(1.2)' },
        },
        glowPulse: {
          '0%, 100%': { 
            opacity: 0.2,
            transform: 'scale(1.0)',
            filter: 'blur(10px)'
          },
          '50%': { 
            opacity: 0.6,
            transform: 'scale(1.05)',
            filter: 'blur(20px)'
          },
        },
        featureFadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        softBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      zIndex: {
        '-10': '-10',
        '-5': '-5',
      },
      backdropBlur: {
        'sm': '4px',
      },
      blur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}; 