import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'

export const routesLink = {
  App: `/`,
}

export const RoutesList = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routesLink.App} element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}
