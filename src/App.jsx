import React from 'react'

import { useReducer } from './hooks'

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return { ...state, count: state.count + 1 }
    case 'dec':
      return { ...state, count: state.count - 1 }
    case 'set':
      return {
        ...state,
        count: action.payload,
      }
    default:
      return state
  }
}

const initialState = {
  count: 1,
}

const App = () => {
  const [value, setValue] = React.useState()

  // how to use
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <p>{`count = ${state.count}`}</p>
      <p>
        <button
          onClick={() => dispatch({ type: 'inc' })}>{`count 加一`}</button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: 'dec' })}>{`count 减一`}</button>
      </p>
      <p>
        <label htmlFor='set'>
          {`输入要设置的 count 值：`}
          <input
            type='text'
            id='set'
            value={value}
            onChange={(e) => setValue(+e.target.value)}
          />
        </label>
      </p>

      <button
        onClick={() =>
          dispatch({ type: 'set', payload: value })
        }>{`set`}</button>
    </div>
  )
}

export default App
