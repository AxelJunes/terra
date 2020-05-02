import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/home'
import Layout from './components/layout'

function App () {
  return (
    <Layout>
      <BrowserRouter>
        <Route exact path='/' component={HomePage} />
      </BrowserRouter>
    </Layout>
  )
}

export default App
