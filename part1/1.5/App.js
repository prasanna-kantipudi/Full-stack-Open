import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
     <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
const Header=c=>{
  return(
    <h1>{c.course}</h1>
  )
}
const Content=(props)=>{
  const l1=props.parts
  const L1=l1.map((p1)=>{
    return(<p>{p1.name} {p1.exercises}</p>)
      }
    )
    return(<div>{L1}</div>)
}
const Total=(props)=>{
  const l1=props.parts
  let c1=0
  for(const k of l1){
    c1+=k.exercises
  }
  return(
    <p>No:Of:Exercises:{c1}</p>
  )
}

export default App