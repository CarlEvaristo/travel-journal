import React from "react"
import Header from "./Components/Header"
import Card from "./Components/Card"
import data from "./data"

function App() {
  const cards = data.map((item, index) => {
    return (
      <Card 
        key = {index}
        {...item}
      />
    )
  })

  return (
    <>
      <Header />
      <div className="container">
        <div className="cards">
          {cards}
        </div>
      </div>
    </>
  )
}

export default App