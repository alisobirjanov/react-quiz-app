import {ADD2} from '../actions/actionsType'
const initializeState = {
  counter2: 300,
};

export default function counter2(state = initializeState, action) {
  switch (action.type) {
    case ADD2:
      return {
        counter2: state.counter2 + action.payload
      }
    default:
      return state;
  }

}
