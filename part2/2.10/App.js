import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
    const[newNumber,setNewnumber] = useState('')
     const[pp,setpp]=useState(persons)
  const handleBP=(event)=>{
      setNewName(event.target.value)
  }
   const handleBP1=(event)=>{
        setNewnumber(event.target.value)
   }
   const handleBP2=(event)=>{
     var x=event.target.value.toLowerCase()
     
     setpp(persons.filter((i)=>{return i.name.toLowerCase().includes(x)}))
     
   }
  const addK=(event)=>{
    event.preventDefault()
    const val=persons.some((z)=>{return z.name===newName})
    if(val===true){
      alert(`${newName} is already added to phonebook`)
    }
    else{

    const R={
      name:newName,
      number:newNumber
    }
    setPersons(persons.concat(R))
    setpp(pp.concat(R))
    setNewnumber('')
    setNewName('')
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter KB={handleBP2}/>
      <PersonForm o={addK} l={newName} n={handleBP} h={newNumber} m={handleBP1}/>     <h2>Numbers</h2>
      <Persons tt={pp}/>
    </div>
  )
}
const Filter=({KB})=>{
  return(
    <h4>filter shown with<input onChange={KB}></input></h4>
  )
}
const PersonForm=({o,l,n,h})=>{
  return(
    <form onSubmit={o}>
        <div>
          name: <input value={l} onChange={n}/>
          number: <input value={h} onChange={n}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}
const Persons=({tt})=>{
  return(
    <div>
        {
          tt.map(S=>{return(
            <h3 key={S.name}>{S.name} {S.number}</h3>
              )
            }
          )
        }
      </div>
    
  )
}

export default App