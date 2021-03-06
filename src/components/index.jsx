/* 
  Реализовать мини-игру Лабиринт
  Пользователь решает куда ему пойти Прямо, Налево или Направо (в лаюиринте)
  После этого мы ищем случайный индекс массива событий randomEvents
  И показываем ему текст:
    "На прошлом шаге вы выбрали пойти {направление}"
    "Перед собой вы видите {случайное событие}"
  
  В состоянии запоминаем количество ходов (нажатий кнопок),
  предыдущий выбор направления, и индекс предыдущего события
*/

import React, { Component } from 'react';

const randomEvents = [];

class Labirint extends Component {
  render() {
    return (
      <div>

        <div>
          На прошлом шаге вы выбрали пойти {}
        </div>
        <div>
          Перед собой вы видите {}
        </div>
        <div>
          <button>Пойти налево</button>
          <button>Пойти прямо</button>
          <button>Пойти направо</button>
        </div>
      </div>
    )
  }
}

export default Labirint;
