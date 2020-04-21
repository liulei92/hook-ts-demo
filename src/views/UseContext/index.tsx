import React, { createContext, useReducer, useContext } from 'react'

const UPDATE_COLOR = 'UPDATE_COLOR'
const initState = { color: 'black' }

type StateType = {
  color: string
}

type ActionType = {
  type: string,
  color: string
}

type MixStateAndDispatch = {
  state: StateType,
  dispatch?: React.Dispatch<ActionType>
}

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case UPDATE_COLOR:
      return { color: action.color }
    default:
      return state
  }
}

const ColorContext = createContext<MixStateAndDispatch>({ state: initState })

const Show: React.FC = props => {
  const { state, dispatch } = useContext(ColorContext)

  return (
    <div style={{ color: state.color }}>
      当前字体颜色为: {state.color}
      <button onClick={() => dispatch && dispatch({ type: UPDATE_COLOR, color: 'red' })}>红色</button>
      <button onClick={() => dispatch && dispatch({ type: UPDATE_COLOR, color: 'green' })}>绿色</button>
    </div>
  )
}

const Example: React.FC = props => {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      <div>
        <Show />

        <button onClick={() => dispatch && dispatch({ type: UPDATE_COLOR, color: 'blue' })}>蓝色</button>
        <button onClick={() => dispatch && dispatch({ type: UPDATE_COLOR, color: 'lightblue' })}>轻绿色</button>
      </div>
    </ColorContext.Provider>
  )
}

export default Example
