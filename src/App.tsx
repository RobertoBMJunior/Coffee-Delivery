import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./Styles_and_Themes/DefaultTheme";
import { GlobalStyle } from "./Styles_and_Themes/GlobalStyle";
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";
import { CoffeeProvider } from "./contexts/CoffeeContext";


export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <CoffeeProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </CoffeeProvider>

    </ThemeProvider>
  )
}

