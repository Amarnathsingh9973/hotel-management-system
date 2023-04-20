import Featured from "../../Component/featured/Featured";
import FeaturedProperty from "../../Component/featuredProperty/FeaturedProperty";
import Footer from "../../Component/footer/Footer";
import Header from "../../Component/header/Header";
import MailList from "../../Component/mailList/MailList";
import Navbar from "../../Component/navbar/Navbar";
import PropertyList from "../../Component/property/PropertyList";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperty />
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
