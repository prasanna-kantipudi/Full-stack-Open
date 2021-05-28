import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const p1=()=>{setGood(good+1)}
  const p2=()=>{setNeutral(neutral+1)}
  const p3=()=>{setBad(bad+1)}
  
  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <button onClick={p1}>good</button>&nbsp;<button onClick={p2}>neutral</button>&nbsp;<button onClick={p3}>bad</button>
      </p>
      <h2>Statistics</h2>
      <Statistics K={good} L={neutral} M={bad}/>
    </div>
  )
}
const Statistics=(props)=>{
  const s=props.K+props.L+props.M
  const avg=props.K-props.L/s
  const T=props.K*100/s
  return (
  <p> good {props.K}<br></br>
      neutral {props.L}<br></br>
      bad {props.M}<br></br>
      all {s}<br></br>
      average {avg}<br></br>
      positive {T}<br></br>
  </p>
  )
}
export default App