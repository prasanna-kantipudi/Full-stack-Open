import React from 'react'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }

  ]
  

  return (
    <div>
     {
       courses.map((m)=>{
         return(
           <Course key={m.id} p={m}/>
         )
       })
     }
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