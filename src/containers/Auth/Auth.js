import {React, Component} from 'react'
import Button from '../../components/Navigation/UI/Button/Button'
import Input from '../../components/Navigation/UI/Input/Input'
import is from 'is_js'
// import axios from "axios"
import './Auth.css'

export default class Auth extends Component {
  state = {
    isFormValid: true,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMassage: "Введите корректный email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "email",
        label: "Password",
        errorMassage: "Введите корректный password",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  loginHandler = () => {};

  registerHandler = async () => {
    // const authData = {
    //   email: 'aee@mail.ru',
    //   password: "1234567",
    //   returnSecureToken: true,
    // };
    // const response = await axios.post(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDBy93IgEFn7pZ6W-8NJmPRCWWGF92FzKA',
    //   authData
    // );
    // const response = await axios.get("http://api.ipify.org/?format=json")
    
      // console.log(this.state.formControls.email.value);
    // console.log(response)
    // console.log(axios.post)
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
      console.log(validation.minLength);
      isValid = value.length >= validation.minLength && isValid;
    }
    return isValid;
  }

  onChangeHandler = (event, controlName) => {
    // console.log(controlName, event.target.value);

    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls,
      isFormValid,
    });
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMassage={control.errorMassage}
          shouldValidate={!!control.validation}
          onChange={(event) => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }

  render() {
    return (
      <div className="Auth">
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className="AuthForm">
            {this.renderInputs()}

            <Button
              type="success"
              onClick={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Войти
            </Button>
            <Button
              type="primary"
              onClick={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}