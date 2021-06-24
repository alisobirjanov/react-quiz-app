import {ADD, SUB, ADD_NUMBER} from '../actions/actionsType'
const initializeState = {
  counter: 20,
};

export default function counter1(state = initializeState, action) {
  switch (action.type) {
    case ADD:
      return {
        counter: state.counter + 1,
      };
    case SUB:
      return {
        counter: state.counter - 1,
      };
    case ADD_NUMBER:
      return {
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }

}
