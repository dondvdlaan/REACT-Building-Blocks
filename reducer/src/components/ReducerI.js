import React, { useReducer } from 'react';
import '../App.css';

/**
 * Simple reducer
 */
const initialData = { name: "patito", age: 15 }
//const initialAge = "nothingToSee"
//const initialAge = 45

/**
 * Reducer function
 * @param {*} state    : current state of reducer
 * @param {*} action : action to be taken
 * @returns                 : new state of reducer
 */
const reducer = (state, action) => {

  console.log("state: ", state)
  console.log("action: ", action)

  switch (action) {

    case "increaseAge": return { name: "patito", age: state.age + 1 }
    case "changeName": return { name: "Bubub", age: state.age }

    default: console.log("No such choice")
  }
}


function ReducerI() {

  const [state, dispatch] = useReducer(reducer, initialData)

  // *** Events ***
  const onIncreaseAge = () => { dispatch("increaseAge") }
  const onChangeName = () => { dispatch("changeName") }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Simple Reducer</h2>
        <p>name: {state.name} </p>
        <p>age: {state.age} </p>
        <button
          type="button"
          onClick={onIncreaseAge}
        >
          Increase age
        </button>
        <button
          type="button"
          onClick={onChangeName}
        >
          Change name
        </button>
      </header>
    </div>
  );
}

export default ReducerI;
