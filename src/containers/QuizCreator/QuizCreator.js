import { React, Component } from "react";
import Button from '../../components/Navigation/UI/Button/Button'
import Input from '../../components/Navigation/UI/Input/Input'
import Select from '../../components/Navigation/UI/Select/Select'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import axios from "axios";
import './QuizCreator.css'

function createControl(config, validation) {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: ''
  }
}

function creteOptionControl(number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: "Значение не может быть пустым",
      id: number
    },
    { required: true }
  );
}

function createFormControls() {
  return {
      question: createControl(
        {
          label: "Введите вопрос",
          errorMessage: "Вопрос не может быть пустым",
        },
        { required: true }
      ),
      option1: creteOptionControl(1),
      option2: creteOptionControl(2),
      option3: creteOptionControl(3),
      option4: creteOptionControl(4),
    }
}

function validate(value, validation = null) {
  if(!validation) {
    return true
  }

  let isValid = true

  if(validation.required) {
    isValid = value.trim() !== "" && isValid
  }


  return isValid
} 

function validateForm(formControls) {
  let isFormValid = true

  for (let control in formControls) {
    if(formControls.hasOwnProperty(control)) {
      isFormValid = formControls[control].valid && isFormValid
    }
  }
  return isFormValid
}


export default class QuizCreator extends Component {
  state = {
    isFormValid: false,
    rightAnswerId: 1,
    quiz: [],
    formControls: createFormControls(),
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = (event) => {
    event.preventDefault();

    const quiz = this.state.quiz.concat();
    const index = quiz.length + 1;

    const {
      question,
      option1,
      option2,
      option3,
      option4,
    } = this.state.formControls;
    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
        { text: option4.value, id: option4.id },
      ],
    };

    quiz.push(questionItem);

    // console.log(quiz);

    this.setState({
      quiz,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });
  };

  createQuizHandler = async (event) => {
    event.preventDefault();

    try {
       await axios.post(
         "https://quiz2-54438-default-rtdb.asia-southeast1.firebasedatabase.app/quizes.json",
         this.state.quiz
       );

      this.setState({
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormControls(),
      });


    } catch(err) {
      console.log(err)
    }
  }

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Auxiliary key={controlName + index}>
          <Input
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            errorMassage={control.errorMassage}
            shouldValidate={!!control.validation}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </Auxiliary>
      );
    });
  }

  selectChangeHandler = (event) => {
    console.log(event.target.value);

    this.setState({
      rightAnswerId: +event.target.value,
    });
  };

  render() {
    const select = (
      <Select
        label="Выберите правильный ответ"
        value={this.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );

    return (
      <div className="QuizCreator">
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderControls()}

            {select}

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Добавить вопрос
            </Button>
            <Button
              type="success"
              onClick={this.createQuizHandler}
              disabled={this.state.quiz.length === 0}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
