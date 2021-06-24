import { React, Component } from "react";
import {Route,  Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Quiz from "./containers/Quiz/Quiz";
import Auth from './containers/Auth/Auth'
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";


// import {connect} from 'react-redux'

// import Counter from './Counter'

// import { add, sub, addNumber } from "./redux/actions/actions";

// export const counterContext = React.createContext(false)
class App extends Component {
 
  render() {
    // console.log(this.props.counter);
    return (
      <Layout>
        {/* <button onClick={this.props.onAdd}>ADD</button>
        <button onClick={this.props.onSub}>DEL</button>
        <button onClick={() => this.props.onAddNumber(2)}>ADD 2</button>
        <button onClick={() => this.props.onAddNumber(-12)}>DELL 12</button> */}
        {/* <Quiz /> */}
        {/* <Route path="/" exact component={Quiz}/>
          <Route path="/add" exact render={() => <h1>Hello World</h1>} /> */}
        <Switch>
          <Route path="/" component={QuizList} exact />
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
        </Switch>
        {/* <Counter/> */}
      </Layout>
    );
  }
}

// function mapStateToProps(state) {
//   // console.log(state.counter1.counter);
//   return {
//     counter: state.counter1.counter,
//   };
// }


// function mapDispatchToProps(dispatch) {
//   return {
//     onAdd: () => {dispatch(add()) },
//     onSub: () => {dispatch(sub()) },
//     onAddNumber: number => {dispatch(addNumber(number)) },
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);


export default App