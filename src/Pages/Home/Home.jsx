import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import Features from "../../components/Home/Features/Features";
import NewsLetter from "../../components/Home/NewsLetter/NewsLetter";
import Reviews from "../../components/Home/Reviews/Reviews";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Features></Features>
           <AboutUs></AboutUs>
           <Reviews></Reviews>
           <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;