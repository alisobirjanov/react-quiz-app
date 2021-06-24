import React from 'react'
import AnswersList from './AnswersList/AnswersList'
import './ActiveQuiz.css'

const ActiveQuiz = (props) => (
  <div className="ActiveQuiz">
    <p className="Question">
      <span>
        <strong>{props.activeQuiz}.</strong>&nbsp; {props.question}
      </span>
      <small>
        {props.activeQuiz} из {props.quizLength}
      </small>
    </p>

    <AnswersList
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      state={props.state}
    />
  </div>
);


export default ActiveQuiz;