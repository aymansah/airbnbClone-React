import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "../src/components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
function App() {
  const [count, setCount] = useState(0)

  const cards = data.map(item => {
    return (
        <Card
            item={item}
            //item={...item}
            // remove item in props.item.---
        />
    )
  })
  return (
    <>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </>
  )
}

export default App
