import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/home'
import CountryPage from './pages/country'
import Layout from './components/layout'

function App () {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/country/:code?' component={CountryPage} />
      </Layout>
    </BrowserRouter>
  )
}

export default App
