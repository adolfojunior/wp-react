
const initialState = {
  number: 1
}

export function count(state = initialState, action) {
  const { type, amount } = action

  switch (type) {
    case 'INCREASE': 
      return {
        number: state.number + amount
      }
    case 'DECREASE':
      return {
        number: state.number - amount
      }
    default: return state
  }
}
