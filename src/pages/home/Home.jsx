import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SpecialistList from "../../components/specialistList/SpecialistList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by Specialist's</h1>
        <SpecialistList/>
        <h1 className="homeTitle">Popular Hospitals</h1>
        <FeaturedProperties/>
      </div>
    </div>
  );
};

export default Home;
