import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle<{ theme: any }>`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
    font-size: 1rem;
    transition: all 0.5s linear;
    scroll-behavior: smooth;
  }
`

export const Logo = styled.h4`
  font-size: 2.4rem;
  font-weight: 600;
  font-family: 'Caveat Brush';
`
