import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = { counter: 0, test: 123 };
  }

  // используем стрелки для слушателей событий
  buttonClick = () => {
    // изменение состояния приводит к перерисовке
    // state всегда обьект - поэтому создаем новый обьект
    this.setState((state) => {
      return {
        ...state,
        counter: state.counter + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.buttonClick}>+1</button>
      </div>
    );
  }
}

export default Counter;
