import React, { useReducer } from 'react';
import '../App.css';
import { Button, FormHelperText, Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';

/**
 * Simple Reducer with TS
 */

interface Person {
  name: string,
  age: number
}
interface IncreaseAge {
  type: "increaseAge"
}
interface ChangeName {
  type: "changeName",
  person: Person
}
type Action = IncreaseAge | ChangeName

const initialData: Person = { name: "patito", age: 15 }
//const initialAge = "nothingToSee"
//const initialAge = 45

/**
 * Reducer function
 * @param {*} state    : current state of reducer
 * @param {*} action : action to be taken
 * @returns                 : new state of reducer
 */
const reducer = (state: Person, action: Action): Person => {

  console.log("state: ", state)
  console.log("action: ", action)

  switch (action.type) {

    case "increaseAge": return { name: state.name, age: state.age + 1 }
    case "changeName": return { name: action.person.name, age: state.age }


    default: return initialData
    //default: console.log("No such choice")
  }
}


function ReducerII() {

  const [state, dispatch] = useReducer(reducer, initialData)

  // *** Event handlers ***
  const onIncreaseAge = () => {

     dispatch({ type: "increaseAge" }) }

  const onChangeName = (e: string) => {

    const person: Person = {
      name: e,
      age: state.age
    }
    dispatch({ type: "changeName", person })
  }

  return (
    <div className="App" >
      <header className="App-header" >
        <h2>Simple Reducer w TS </h2>
        < p > name: {state.name} </p>
        < p > age: {state.age} </p>
        <Button
          variant="text"
          onClick={onIncreaseAge}>
          Increase age
        </Button>
        <FormControl>
          <InputLabel htmlFor="new-name">Enter name</InputLabel>
          <Input
            id="new-name"
            aria-describedby="name-helper-text"
            onChange={(e) => onChangeName(e.target.value)} />
          <FormHelperText id="name-helper-text">Any name is vald.</FormHelperText>

        </FormControl>
      </header>
    </div>
  );
}

export default ReducerII;
