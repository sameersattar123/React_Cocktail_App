import React from 'react'
import {BrowserRouter , Route , Routes} from "react-router-dom"
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import PageNotFound from './Components/PageNotFound'
import Layout from './Components/Layout'


const App = () => {
  return (
   <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={
      <>
      <Layout>
      <Home/>
      </Layout>
      </>
    }/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>
   </>
  )
}

export default App
