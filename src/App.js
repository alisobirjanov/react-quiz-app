import { React, Component } from "react";
import Layout from './hoc/Layout/Layout'


// export const counterContext = React.createContext(false)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  render() {
    return (
      <Layout>
        <div>
          <h2>Hello World</h2>
        </div>
      </Layout>
    );
  }
 
}

export default App;
