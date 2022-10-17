import { Header } from '../../components/Header/Header'
import { Subtitle } from '../../components/Subtitle/Subtitle'
import { QueryInput } from '../../components/QueryInput/QueryInput'
import { Footer } from '../../components/Footer/Footer'

import './App.scss'
import MusicImage from '../assets/music_notes.png'

function App() {

  return (
    <div className="App">
      <Header />
      <Subtitle />
      <QueryInput />
      <Footer />
    </div>
  )
}

export default App
