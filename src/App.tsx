import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { DeliveryContextProvider } from './Contexts/DeliveryContext'


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <DeliveryContextProvider>
          <Router/>
        </DeliveryContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
