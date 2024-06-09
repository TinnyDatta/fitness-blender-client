import { Helmet } from "react-helmet-async";
import AboutUs from "../../components/Home/AboutUs/AboutUs";
import Banner from "../../components/Home/Banner/Banner";
import Features from "../../components/Home/Features/Features";
import NewsLetter from "../../components/Home/NewsLetter/NewsLetter";
import Reviews from "../../components/Home/Reviews/Reviews";
import TeamSection from "../../components/Home/TeamSection/TeamSection";
import ForumHome from "../../components/Home/Forum/ForumHome";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || FitnessBlender</title>
            </Helmet>
           <Banner></Banner>
           <Features></Features>
           <AboutUs></AboutUs>
           <TeamSection></TeamSection>
           <Reviews></Reviews>
           <NewsLetter></NewsLetter>
           <ForumHome></ForumHome>
        </div>
    );
};

export default Home;