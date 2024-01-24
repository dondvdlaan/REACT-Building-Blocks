/**
 * Functions for adjusting the persons in a Department based on useReducer.
 * useContext is applied to export the Department
 */

import { Dispatch, ReactElement, createContext, useReducer } from "react"
import ReducerIV from "./ReducerIV"

// **** Constants ****
export interface Department {
    dep: Person[]
}
export interface Person {
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
export type Action = AddPerson | DeletePerson

const initialDep: Department = { dep: [{ name: "nobody", age: "-1" }] }

// Modules that will serve as a Provider
export const StateContext = createContext({} as Department)
export const DispatchContext = createContext({} as  Dispatch<Action>)

// *** Functions ***
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
/**
 * Function to export the useReducer to other modules
 */
export default function DepartmentProvider(props:{children: ReactElement}) {

    const [state, dispatch] = useReducer(reducer, initialDep)

    console.log("useReducer state: ", state)

    return (
        <StateContext.Provider value={state} >
            <DispatchContext.Provider value={dispatch} >
                {props.children}
            </ DispatchContext.Provider >
        </ StateContext.Provider>
    )
}