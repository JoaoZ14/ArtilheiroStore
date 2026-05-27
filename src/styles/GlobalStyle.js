import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --navbar-height: 108px;
    --safe-area-bottom: env(safe-area-inset-bottom, 0px);

    /* Tipografia alinhada à logo: Glamour Country (Glamour) + script (Country) */
    --font-display: 'Rye', 'Smokum', Georgia, serif;
    --font-script: 'Pinyon Script', 'Great Vibes', cursive;
    --font-body: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    /* Marrom caramelo da logo */
    --color-primary: #9B7349;
    --color-primary-hover: #82613D;
    --color-primary-soft: rgba(155, 115, 73, 0.12);
    --color-bg: #FAF7F2;
    --color-surface: #FFFFFF;
    --color-text: #3D3229;
    --color-text-muted: #7A6B5D;
    --color-border: #E5DDD3;
    --color-accent: #B8956A;
    --color-footer-bg: #4A3F35;
    --color-footer-text: #D4C9BC;
  }

  @media (max-width: 767px) {
    :root {
      --navbar-height: 88px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-text);
    background: var(--color-bg);
  }

  h1, h2, h3 {
    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: 0.02em;
  }

  a, button {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Evita ícones SVG (react-icons) esticarem no layout */
  button svg,
  a svg {
    flex-shrink: 0;
  }

  ul {
    list-style: none;
  }
`
