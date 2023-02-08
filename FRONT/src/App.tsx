/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { ThemeProvider, Global } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import * as Pages from 'pages'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { loginApp } from 'services/login'
import { parseJwt } from 'helpers/token.utils'

function App() {
  const [token, setToken] = useCookies(['token'])

  async function fetchLogin() {
    try {
      const token = await loginApp({ login: 'letscode', senha: 'lets@123' })

      const { exp } = parseJwt(token)

      setToken('token', token, { path: '/', expires: expirationToken(exp) })
    } catch (error) {
      console.error(error)
    }
  }

  function expirationToken(expiration: number) {
    return new Date(expiration * 1000)
  }

  useEffect(() => {
    if (!token.token) fetchLogin()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pages.Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
