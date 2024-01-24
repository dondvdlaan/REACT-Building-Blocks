import { useContext, useState } from 'react';
import '../App.css';
import { Button, FormHelperText, Input, InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { DispatchContext, Person, StateContext } from './Department';

/**
 * Extended Reducer with TS and useContext
 */
function ReducerIV() {

  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  const [name, setName] = useState<string>("empty")
  const [age, setAge] = useState<string>("-1")

  console.log("ReducerIV state: ", state)

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
        <h2 >Extended Reducer w TS & useContext</h2>
        <div style={{ textAlign: "left" }}>
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

export default ReducerIV;
