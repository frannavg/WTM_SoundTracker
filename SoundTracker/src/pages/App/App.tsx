import { Header } from '../../components/Header/Header'
import { Subtitle } from '../../components/Subtitle/Subtitle'
import { QueryInput } from '../../components/QueryInput/QueryInput'

import { useState } from 'react'
import './App.scss'

function App() {

  return (
    <div className="App">
      <Header />
      <Subtitle />
      <QueryInput />
    </div>
  )
}

export default App
