import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }

  // используем стрелки для слушателей событий
  increment = () => {
    // изменение состояния приводит к перерисовке
    // state всегда обьект - поэтому создаем новый обьект
    this.setState((state) => {
      return {
        ...state, // записываем старые знач
        // устанавливаем новые знач - перезаписывая с тем же названием свойства
        counter: state.counter + 1,
      };
    });
  }
  decrement = () => {
    this.setState( state => ({
      ...state,
      counter: state.counter - 1,
    }) );
  }
  reset = () => {
    this.setState({ ...this.state, counter: 0 });
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.increment}>+1</button>

        <button onClick={this.decrement}>-1</button>

        <button onClick={this.reset}>Сброс</button>
      </div>
    );
  }
}

/* 
  Создать компонент счетчика
  с тремя кнопками +, -, и сброс
 */

export default Counter;
