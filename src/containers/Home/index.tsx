import Hero from './Hero';
import HomeProducts from './HomeProducts';
import Slider from './Slider';
import '../../css/home.css';

const Home = () => {
  return (
    <div data-testid="home">
      <Hero />
      <HomeProducts />
      <Slider />
    </div>
  );
};
export default Home;
