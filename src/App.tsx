import React, { useState } from 'react'
import Home from './page/home'
import { GlobalStyle } from './styles/global'


function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
    </React.Fragment>
  )
}

export default App
