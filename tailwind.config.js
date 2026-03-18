/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0B0F19',   // Fundo obsidian profundo
                surface: '#0D1321',      // Painéis e cards
                primary: '#0B0F19',      // Mantido dark para retrocompatibilidade provisória
                accent: '#C6A14A',       // Destaques champagne
                text: '#A6B6D3',         // Texto base frio/azulado
                darkSurface: '#121A2C',  // Painéis de destaque
                lines: '#1E2A44',        // Linhas em azul noturno
                technicalWhite: '#E8EDF5', // Branco técnico
                obsidian: '#0B0F19',
            },
            fontFamily: {
                heading: ['Inter', 'sans-serif'],          // Títulos e Base
                drama: ['Playfair Display', 'serif'],      // Itálico / Drama
                mono: ['JetBrains Mono', 'monospace'],     // Dados / Labels
            },
        },
    },
    plugins: [],
}
