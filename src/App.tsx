import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/defaults"
import { GlobalStyle } from "./styles/global"
import { CartContextProvider } from "./context/CartProvider"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
