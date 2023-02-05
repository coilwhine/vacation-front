import { useState } from 'react'
import './App.scss'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
