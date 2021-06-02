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
     console.log(pp)
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
      <h4>filter shown with<input onChange={handleBP2}></input></h4>
      <form onSubmit={addK}>
        <div>
          name: <input value={newName} onChange={handleBP}/>
          number: <input value={newNumber} onChange={handleBP1}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          pp.map(S=>{return(
            <h3 key={S.name}>{S.name} {S.number}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App