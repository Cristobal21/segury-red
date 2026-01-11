// eslint.config.js
import tseslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import astroPlugin from 'eslint-plugin-astro'
import astroParser from 'astro-eslint-parser'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  // Ignorados (reemplaza a .eslintignore)
  {
    ignores: [
      'node_modules',
      'dist',
      '.astro',
      '.vercel',
      '.netlify',
      'coverage',
    ],
  },

  // Reglas para TS/JS
  ...tseslint.configs.recommended.map(cfg => ({
    ...cfg,
    files: ['**/*.{ts,tsx,js,cjs,mjs}'],
    languageOptions: {
      ...(cfg.languageOptions || {}),
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      ...(cfg.rules || {}),
      // Ejemplos útiles:
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  })),

  // Reglas para archivos .astro
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        // delega el script interno a TS parser
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: { astro: astroPlugin },
    rules: {
      // preset recomendado para Astro
      ...astroPlugin.configs.recommended.rules,
    },
  },

  // Quita conflictos de estilo (Prettier manda en formato)
  eslintConfigPrettier,
]
