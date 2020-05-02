import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/home'
import CountryPage from './pages/country'
import Layout from './components/layout'

function App () {
  return (
    <Layout>
      <BrowserRouter>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/country/:code' component={CountryPage} />
      </BrowserRouter>
    </Layout>
  )
}

export default App
