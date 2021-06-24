import axios from "axios";
import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
} from "./actionsTypes";

export function fetchQuizes() {
  return async (despatch) => {
      despatch(fetchQuizesStart());
    try {
      const response = await axios.get(
        "https://quiz2-54438-default-rtdb.asia-southeast1.firebasedatabase.app/quizes.json"
      );
      const quizes = []
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `${index + 1} (${key})`
        })
      })
      despatch(fetchQuizesSuccess(quizes));
    } catch(e) {
      despatch(fetchQuizesError(e));
    }
  };
}

export function fetchQuizesStart() {
    return {
      type: FETCH_QUIZES_START,
    };
}

export function fetchQuizesSuccess(quizes) {
    return {
      type: FETCH_QUIZES_SUCCESS,
      quizes
    };
}

export function fetchQuizesError(e) {
    return {
      type: FETCH_QUIZES_ERROR,
      error: e
    };

}