/*
  Создать компонент слайдера картинок
  1) Кнопки перемещения назад и вперед
  2) Сделайте цикличное перемещение по картинкам
  3) По нажатию кнопки Старт/Стоп запускайте интервал в 1с для перелистывания
*/
import React from 'react';
import './Slider.css';

const images = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
  'https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://thumbs.dreamstime.com/b/jour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg',
];

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = { slide: 0, timerId: null };
  }

  componentDidMount() {
    this.startSlider();
  }

  componentWillUnmount() {
    this.stopSlider();
  }

  // для колбеков используйте стрелки в большинстве случаев
  nextSlide = () => {
    this.setState((state) => ({
      ...state,
      slide: state.slide + 1 >= images.length ? 0 : state.slide + 1,
    }));
  }

  startSlider = () => {
    // таймер выключен
    if (this.state.timerId === null) {
      const timerId = setInterval(this.nextSlide, 1000);
      this.setState((state) => {
        return {
          ...state,
          timerId: timerId,
        };
      });
    }
  }

  stopSlider = () => {
    if (this.state.timerId !== null) {
      clearInterval(this.state.timerId);
      this.setState((state) => {
        return {
          ...state,
          timerId: null,
        };
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <button>-</button>

          <div>
            <img className="slideImage" src={images[this.state.slide]} alt="" />
          </div>

          <button onClick={this.nextSlide}>+</button>
          Текущий слайд №{this.state.slide}
        </div>
        <div>
          <button onClick={this.startSlider}>Старт</button>
          <button onClick={this.stopSlider}>Стоп</button>
          <span>{this.state.timerId}</span>
        </div>
      </div>
    );
  }
}

export default Slider;
