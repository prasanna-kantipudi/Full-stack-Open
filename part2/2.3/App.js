import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id:1,
    parts: [
      {
        id:1,
       name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id:2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id:3,
        name: 'State of a component',
        exercises: 14
      },
      {
        id:4,
        name: 'redux',
        exercises: 11
      }
    ]
  }
  

  return (
    <div>
     <Course p={course}/>
    </div>
  )
}
const Course=({p})=>{
  return(
    <div>
    <Header k={p.name}/>
    <Content b={p.parts}/>
    <Total b={p.parts}/>

    </div>
  )
}

const Header=({k})=>{
  return(
    <h2>{k}</h2>
  )
}
const Content=({b})=>{
  return(
    <div>
      {
        b.map(r=>{
          return(
            <Part key={r.id} a={r.name} v={r.exercises}/>
          )
        }

        )
      }
    </div>
  )
}
const Part=({a,v})=>{
  return(
    <p>{a} {v}</p>
  )
}
const Total=({b})=>{
  const bp=b.map((pq)=>{return (pq.exercises)})
  const rs=bp.reduce((y,z)=>{return y+z})
  return(
    <strong><p>total of {rs} exercises</p></strong>
  )
}
export default App;