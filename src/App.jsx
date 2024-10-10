import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import ErrorPage from './pages/ErrorPage'

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/user"
          element={
            <Layout>
              <User />
            </Layout>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
