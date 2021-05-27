import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header c={course} />
      <Content p1={part1} p2={part2} p3={part3} q1={exercises1} q2={exercises2} q3={exercises3} />
      <Total T={exercises1+exercises2+exercises3}/>
    </div>  )
}

const Header=prop=>{
  return(
    <div>
      <h1>{prop.c}</h1>
    </div>
  );
}
const Content=props=>{
  return(
    <div>
      <p>
        {props.p1} {props.q1}
      </p>
      <p>
        {props.p2} {props.q2}
      </p>
      <p>
        {props.p3} {props.q3}
      </p>
    </div>
  )
}

const Total=t=>{
  return(
    <div>
      <p>No:Of:Exercises:{t.T}</p>
    </div>
  )
}

export default App