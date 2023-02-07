import { css } from '@emotion/react'

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  body {
    font-family: Montserrat, sans-serif;
  }
`

export default GlobalStyles
