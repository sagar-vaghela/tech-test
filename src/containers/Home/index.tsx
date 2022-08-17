import Hero from "../../components/Home/Hero";
import HomeProducts from "../../components/Home/HomeProducts";
import Slider from "../../components/Home/Slider";
import '../../css/home.css';

const Home = () => {
  return (
    <div>
        <Hero />
        <HomeProducts />
        <Slider />
    </div>
  );
};
export default Home;
