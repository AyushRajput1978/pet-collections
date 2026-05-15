import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    color: #1e2529;
    background: #f7f5f0;
    font-family:
      Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    --ink: #1e2529;
    --muted: #667178;
    --paper: #fffdf8;
    --line: #ded8cc;
    --teal: #157f7b;
    --teal-deep: #0e5754;
    --coral: #c85845;
    --ochre: #bc872c;
    --sage: #577665;
    --shadow: 0 18px 45px rgba(35, 45, 52, 0.12);
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
  }

  button,
  input,
  select {
    font: inherit;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ::selection {
    background: rgba(21, 127, 123, 0.22);
  }
`;
