import React, { useReducer } from 'react'

type StateType = {
  count: number
}

type ActionType = {
  type: 'reset' | 'decrement' | 'increment'
}

const initialState = { count: 0 }

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      return state
  }
}

const Counter: React.FC = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <p>Count: { state.count }</p>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}
export default Counter
