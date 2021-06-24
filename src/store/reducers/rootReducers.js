import {combineReducers} from 'redux'
import { quizReducers } from "./quiz";

export default combineReducers({
  quiz: quizReducers,
});