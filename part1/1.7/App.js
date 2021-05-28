import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const p1=()=>{setGood(good+1)}
  const p2=()=>{setNeutral(neutral+1)}
  const p3=()=>{setBad(bad+1)}
  const s=good+neutral+bad
  const avg=good-bad/s
  const T=good*100/s
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={p1}>good</button>&nbsp;<button onClick={p2}>neutral</button>&nbsp;<button onClick={p3}>bad</button>
      </p>
      <h2>Staistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>
        
        all:{s}<br/>
        average:{avg}<br/>
        positive:{T}%
      
      </p>
    </div>
  )
}

export default App