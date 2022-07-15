redux 核心原理
将应用的全局状态存放于单个 store 中，唯一改变 state 的方法是通过向 dispatch() 调度函数传入描述事件的 action 对象，由 reducer 来决定如何响应 action 更新 state。依据原有的 state 和指定的 action 来决定如何计算新的 state
