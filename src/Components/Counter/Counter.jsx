import React, { useEffect, useState } from 'react'
import './counter.css'

function Counter() {
    const [endCounts, setEndCounts] = useState({
        CompletedProjects: 4370,
        TotalCollection: 348,
        YearsofMarket: 15,
        HappyClients: 500,
      });
    
      const [counts, setCounts] = useState({
        CompletedProjects: 0,
        TotalCollection: 0,
        happyClients: 0,
        YearsofMarket: 0,
        HappyClients: 0,
      });
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCounts((prevCounts) => ({
            CompletedProjects: Math.min(prevCounts.CompletedProjects + 1, endCounts.CompletedProjects),
            TotalCollection: Math.min(prevCounts.TotalCollection + 1, endCounts.TotalCollection),
            happyClients: Math.min(prevCounts.happyClients + 1, endCounts.happyClients),
            YearsofMarket: Math.min(prevCounts.YearsofMarket + 1, endCounts.YearsofMarket),
            HappyClients: Math.min(prevCounts.HappyClients + 1, endCounts.HappyClients),
          }));
        }, 5);
    
        return () => clearInterval(interval);
      }, [endCounts]); // Add 'endCounts' to the dependency array
  return (
    <section className='counter-section'>
      <div className="counter-container">
        <div className="same-col">
            <span>{counts.CompletedProjects}+</span>
            <h2>Completed Projects</h2>
        </div>
        <div className="same-col">
            <span>{counts.TotalCollection}+</span>
            <h2>Total Collection</h2>
        </div>
        <div className="same-col">
            <span>{counts.YearsofMarket}+</span>
            <h2>Years of Market</h2>
        </div>
        <div className="same-col">
            <span>{counts.HappyClients}+</span>
            <h2>Happy Clients</h2>
        </div>
      </div>
    </section>
  )
}

export default Counter
