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
        <Button singer={p1} notification='good'/>
        <Button singer={p2} notification='neutral'/>
        <Button singer={p3} notification='bad'/>
      </p>
      <h2>Statistics</h2>
      <Statistics K={good} L={neutral} M={bad}/>
    </div>
  )
}
const Statistics=(props)=>{
  if(props.K===0 && props.L===0 && props.M===0)
  return(
    <h2>No feedback given</h2>
  )
  const s=props.K+props.L+props.M
  const avg=props.K-props.L/s
  const T=props.K*100/s
  return (
  <table><tbody>
    <Statistic R={props.K} text='good'/>
    <Statistic R={props.L} text='neutral'/>
    <Statistic R={props.M} text='bad'/>
    <Statistic R={s} text='all'/>
    <Statistic R={avg} text='avg'/>
    <Statistic R={T} text='positive'/>
  </tbody>
  </table>
  )
}
 const Button=(props)=>{
   return(
     <button onClick={props.singer}>{props.notification}</button>
   )
 }
const Statistic=(props)=>{
  return(
  <tr>
      <td>{props.text}</td>
      <td>{props.R}</td>
  </tr>
  )
}
export default App