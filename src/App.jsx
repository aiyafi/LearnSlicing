import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from '../components/Header/Header'
import { Content } from '../components/Content/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Content/>
    </>
  )
}

export default App
