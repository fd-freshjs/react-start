import Counter from "../components/Counter";
import Slider from "../components/Slider";

function Home(props) {
  return <div className="homepage">
    <Counter />
    <Slider />
  </div>;
}

export default Home;