import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
} from "../actions/actionsTypes.js";

const initializeState = {
  quizes: [],
  loading: false,
};

export function quizReducers(state = initializeState, actions) {
  switch (actions.type) {
    case FETCH_QUIZES_START:
      return {
          ...state, loading: true
      };
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        loading: false,
        quizes: actions.quizes
      }
    case FETCH_QUIZES_ERROR:
      return {
          ...state, loading: true, error: actions.error
      };
    default:
      return state;
  }
}
