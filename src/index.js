import "./styles.css";
import ReactDOM from "react-dom";
import React from "react";

class FizzBuzz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      fizzbuzz: ""
    };
    this.fizzBuzz = this.fizzBuzz.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  fizzBuzz() {
    let n = this.state.counter;
    let fb = this.state.fizzbuzz;

    if (n % 3 === 0) {
      if (n % 5 === 0) {
        fb += "FizzBuzz,";
      } else {
        fb += "Fizz,";
      }
    } else if (n % 5 === 0) {
      fb += "Buzz,";
    } else {
      fb += n + ",";
    }
    this.setState({ fizzbuzz: fb });
  }
  increment() {
    this.setState((prevState, props) => ({
      counter: ++prevState.counter
    }));
    this.fizzBuzz();
  }
  decrement() {
    this.setState((prevState, props) => ({
      counter: --prevState.counter
    }));
    this.fizzBuzz();
  }
  render() {
    return (
      <div>
        <p>Click to fizzbuzz</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <p>{this.state.fizzbuzz}</p>
      </div>
    );
  }
}

ReactDOM.render(<FizzBuzz />, document.getElementById("app"));
