import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = { counter: 0, test: 123 };
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={
          () => {
            // изменение состояния приводит к перерисовке
            // state всегда обьект - поэтому создаем новый обьект
            this.setState( {
              ...this.state,
              counter: this.state.counter + 1,
            } );
          }
        }>+1</button>
      </div>
    );
  }
}

export default Counter;
