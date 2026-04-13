import "../Style/Home.css"
import Hero from "../Components/Home/Hero"
import FeaturedTokens from "../Components/Home/Featuretoken";
import Learn from "../Components/Home/Learn"


function Home(){

    return(
        <>
            <Hero/>
            <FeaturedTokens/>
            <Learn/>
        </>
    );

}

export default Home;