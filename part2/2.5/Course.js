import React from 'react'

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
  export default Course