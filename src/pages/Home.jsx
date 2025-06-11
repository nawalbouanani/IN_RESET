import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Hero from "./hero.jsx"; 
import About from "./About.jsx";
import Products from "./Products.jsx";
import Colaboradores from "./Colaboradores.jsx";


export const Home = () => {
  const {store, dispatch} = useGlobalReducer()

  return (
    <div>
      <Hero/>
	  <About/>
	  <Products/>
	  <Colaboradores/>
    </div>
  );
};