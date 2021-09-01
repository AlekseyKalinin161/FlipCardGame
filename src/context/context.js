import * as React from 'react'
import {createContext, useContext, useReducer} from 'react'
import {stateGame} from "../globalState/globalState";

const StateContext = createContext()

 function stateReducer(state, action) {
    switch (action.type) {
        case 'INITIAL_GAME':
            console.log('INITIAL_GAME');
            return state = {
                ...state,
                gameData: action.data
            };
        case 'CHANGE_TYPE_GAME':
            return state = {
                ...state,
                gameType: action.value,
            };
        case 'SET_CARDS_NUMBERS':
            return state = {
                ...state,
                gameSize: action.value
            };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function StateProvider({children}) {
    const [state, dispatch] = useReducer(stateReducer, stateGame)
    const value = {state, dispatch}
    return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

function useCustomState() {
    const context = useContext(StateContext)
    if (context === undefined) {
        throw new Error('useCustomState must be used within a StateProvider')
    }
    return context
}


export {StateProvider, useCustomState}