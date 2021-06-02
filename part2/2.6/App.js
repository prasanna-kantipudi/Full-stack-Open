import React,{useState} from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
    

  const handleBP=(event)=>{
      setNewName(event.target.value)
  }

  const addK=(event)=>{
    event.preventDefault()
    const R={
      name:newName
    }
    setPersons(persons.concat(R))
    setNewName('')
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addK}>
        <div>
          name: <input value={newName} onChange={handleBP}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {
          persons.map(S=>{return(
            <h3 key={S.name}>{S.name}</h3>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default App