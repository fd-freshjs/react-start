import React from "react";
import Home from "./pages/Home";
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: 'MyReact',
      user: { name: 'Oleg', image: 'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' },
    };
  }

  render() {
    return (
      <div>
        <Header logoText={this.state.brand} user={this.state.user} />

        <main className="main">
          {/* В будущем будем менять содержимое в зависимости от адреса страницы */}
          <Home />
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
