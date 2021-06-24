import React from "react";
import { connect } from "react-redux";
import {add2} from './redux/actions/actions'

class Counter extends React.Component {
  render() {
    return (
      <div style={{ border: "3px solid red", padding: "10px" }}>
        <h1>Counter {this.props.counter}</h1>
        <hr />
        <div>
          <button onClick={() => this.props.onChange(5)}>Add</button>
          <button>SUB</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter2.counter2
  };
}


function mapDispatchToProps(dispatch) {
  return {
    onChange: (number) => {
      dispatch(add2(number));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
