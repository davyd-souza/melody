'use client'

// DEPENDENCY
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* CSS RESET */
  /* 1. Use a more-intuitive box-sizing model. */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin and padding & built-in form typography styles */
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }

  /*  3. Allow percentage-based heights in the application */
  html,
  body {
    height: 100%;
  }

  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    height: 100dvh;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;

    display: grid;
    place-content: center;
    background-image: linear-gradient(180deg, #006a71 0%, #004082 100%);
  }

  /*  6. Improve media defaults */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /*  7. Remove built-in form typography styles */
  input,
  button,
  textarea,
  select,
  a {
    font: inherit;
  }

  /*  8. Avoid text overflows */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
`

export default GlobalStyles
