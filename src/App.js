import React from 'react'

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatWmx,
  Services,
} from "./containers";
import { Navbar, Brand, Wmx } from "./components";

import './index.css'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatWmx />
      <Services />
      <Features />
      <Possibility />
      <Wmx />
      <Blog />
      <Footer />
    </div>
  )
}

export default App