import { React, Component } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../components/Navigation/UI/Loader/Loader";
import { connect } from "react-redux";
import "./QuizList.css";
import { fetchQuizes } from "../../store/actions/quiz";

class QuizList extends Component {
  // state = {
  //   quizes: [],
  //   loading: true
  // }

  renderQuiz() {
    return this.props.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={"/quiz/" + quiz.id}>Test {quiz.name}</NavLink>
        </li>
      );
    });
  }

  componentDidMount() {
    this.props.fetchQuizes();
  }

  render() {
    return (
      <div className="QuizList">
        <div>
          <h1>Список тестов</h1>
          {this.props.loading && this.props.loading.length !== 0 ? <Loader /> : <ul>{this.renderQuiz()}</ul>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
