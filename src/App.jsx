import { useState } from 'react'
import './App.css'
import { TextField } from '@mui/material'

function App() {
  const listOfFruits = ['Banana', 'Apple', 'Orange', 'Mango', 'Pineapple']
  const [fruits, updateFruits] = useState(listOfFruits);
  
  const filterFruits = (value) => {
    const res = listOfFruits.filter(fruit => fruit.toUpperCase().includes(value.toUpperCase()))
    updateFruits(res)
  }


  return (
    <>
      <h1>Feature search filter in React</h1>
      <TextField id="outlined-basic" label="Search" variant="outlined" onChange = { ($event) => filterFruits($event.target.value) } />
      <ul>
        {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
      </ul>
    </>
  )
}

export default App
