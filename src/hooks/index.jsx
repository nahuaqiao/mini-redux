import React from 'react'

/**
 * 手写 mini redux
 * <p>
 *  redux 核心原理：将应用的全局状态存放于单个 store 中，
 * 唯一改变 state 的方法是通过向 dispatch() 调度函数传入描述事件的 action 对象，
 * 由 reducer 来决定如何响应 action 更新 state。依据原有的 state 和指定的 action 来决定如何计算新的 state
 * </p>
 * @param {function} reducer 传入 reducer
 * @param {object} initialState 初始 state
 * @returns 返回 state 和 state 的调度函数
 */
export const useReducer = (reducer, initialState) => {
  const [state, setState] = React.useState(initialState)

  const dispatch = (action) => {
    setState(reducer(state, action))
  }

  return [state, dispatch]
}
