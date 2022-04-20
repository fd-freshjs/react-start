import React from 'react';
import Header from './Header';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        {/*  */}
        <Header />
        {/*  */}
      </div>
    );
  }
}

export default App;


/* 

  1) На основе примера файла App.js создайте новый файл Header.js
  2) перенесите тэг header из App в новый файл
  3) после чего подключите новый компонент внутри App

*/
