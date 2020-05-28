import React, { Component } from "react";
import Input from "./components/Input";
import Vns from "./components/Vns";
import Header from "./components/Header";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.typeHandler = this.typeHandler.bind(this);
    this.finishHandler = this.finishHandler.bind(this);

    this.state = {
      vns: [],
      currUser: 0,
      loading: false
    };
  }

  typeHandler(user) {
    this.setState({
      currUser: user.target.value
    });
  }
  finishHandler() {
    this.refreshList();
    this.setState({ loading: true });
  }

  refreshList() {
    axios
      .get(`http://127.0.0.1:8000/api/?user=${this.state.currUser}`)
      .then(res => {
        this.setState({ vns: res.data.res });
        this.setState({ loading: false });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  render() {
    let data;
    if (this.state.loading) {
      data = (
        <div className="App">
          <Header></Header>
          <Input
            typeHandler={this.typeHandler}
            finishHandler={this.finishHandler}
          />
          <img
            src={require("./Images/Spin-1s-200px.gif")}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "100px",
              height: "100px",
              marginTop: "5em"
            }}
          />
        </div>
      );
    } else {
      data = (
        <div className="App">
          <Header></Header>
          <Input
            typeHandler={this.typeHandler}
            finishHandler={this.finishHandler}
          />
          <Vns vns={this.state.vns} />
        </div>
      );
    }
    return <div>{data}</div>;
  }
}

export default App;
