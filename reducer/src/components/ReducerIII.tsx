import React, { useReducer, useState } from 'react';
import '../App.css';
import { Button, FormHelperText, Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';

/**
 * Extended Reducer with TS
 */

interface Department {
  dep: Person[]
}
interface Person {
  name: string,
  age: string
}
interface AddPerson {
  type: "addPerson",
  person: Person
}
interface DeletePerson {
  type: "deletePerson",
  person: Person
}
type Action = AddPerson | DeletePerson

const initialDep: Department = { dep: [{ name: "nobody", age: "-1" }] }

/**
 * Reducer function
 * @param {*} state     : current state of reducer
 * @param {*} action    : action to be taken
 * @returns             : new state of reducer
 */
const reducer = (state: Department, action: Action): Department => {

  console.log("state: ", state)
  console.log("action: ", action)

  switch (action.type) {

    case "addPerson": return { ...state, dep: [...state.dep, action.person] }
    case "deletePerson": return state // for the moment

    default: return initialDep
    //default: console.log("No such choice")
  }
}


function ReducerIII() {

  const [state, dispatch] = useReducer(reducer, initialDep)
  const [name, setName] = useState<string>("empty")
  const [age, setAge] = useState<string>("-1")

  // *** Event handlers ***
  const onAddPerson = () => {

    const person: Person = {
      name,
      age
    }
    dispatch({ type: "addPerson", person })
  }

  const onDeletePerson = (e: string) => {

    const person: Person = {
      name,
      age
    }
    dispatch({ type: "deletePerson", person })
  }

  return (
    <div className="App" >
      <header className="App-header" >
        <h2 >Extended Reducer w TS</h2>
        <div style={{textAlign:"left"}}>
          <ul >
            {state.dep.map((p, i) =>
              < li key={i} >name: {p.name} age: {p.age} </li>
            )}
          </ul>
        </div>

        <FormControl>
          <InputLabel htmlFor="new-name">Name</InputLabel>
          <Input
            id="new-name"
            aria-describedby="name-helper-text"
            onChange={(e) => setName(e.target.value)} />
          <FormHelperText id="name-helper-text">Any name is vald.</FormHelperText>
        </FormControl>
        <br />
        <FormControl>
          <InputLabel htmlFor="new-age">Age</InputLabel>
          <Input
            id="new-age"
            aria-describedby="age-helper-text"
            onChange={(e) => setAge(e.target.value)} />
        </FormControl>
        <Button
          variant="text"
          onClick={onAddPerson}>
          Add person
        </Button>
      </header>
    </div>
  );
}

export default ReducerIII;
