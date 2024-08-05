import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

// Main App component
export default function App() {
  // Mapping over data to create an array of Card components
  const cards = data.map(item => {
    return <Card 
      item = {item}
    />
  })
  return (
    <div>
        <Navbar />
        <section className="cards-list">
          {cards}
        </section>
    </div>
  )
}
