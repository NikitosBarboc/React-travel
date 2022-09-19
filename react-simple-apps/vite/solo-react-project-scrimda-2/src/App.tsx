import React from 'react';
import Header from './components/Header';
import TravelCard from './components/TravelCard';
import data from './data';
function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='travelCards-wrapper'>
        {data.map((card) => {
          return <TravelCard {...card} key={card.title} />
        })}
      </div>
    </div>
  )
}

export default App
