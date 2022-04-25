/*
  Создать компонент слайдера картинок
  1) Кнопки перемещения назад и вперед
  2) Сделайте цикличное перемещение по картинкам
  3) По нажатию кнопки Старт/Стоп запускайте интервал в 1с для перелистывания
*/
import React from 'react';

const images = ['image1', 'image2'];

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  next = () => {}
  startSlider = () => {}

  render() {
    return (
      <div>
        <div>
          <button>-</button>

          <img src={} alt="" />

          <button onClick={this.next}>+</button>
        </div>
        <div>
          <button>Старт/Стоп</button>
        </div>
      </div>
    );
  }
}

export default Slider;
