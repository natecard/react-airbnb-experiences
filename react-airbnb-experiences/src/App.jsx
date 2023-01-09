import { useState } from 'react'
import './App.css'
import Hero from './Hero'
import Card from './MainContent'
import Navbar from './Navbar'
import experienceData from './data'

function App() {
  const [count, setCount] = useState(0)
  const dataElements = experienceData.map(data => {
    return  <Card
    key={data.id}
    {...data}
    />
  })
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='container'>
      {dataElements}
      </section>
    </div>
  )
}
export default App
