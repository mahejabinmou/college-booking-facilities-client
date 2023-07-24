import Banner from "../Banner/Banner";
import CollegeSection from "../CollegeSection/CollegeSection";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import Navbar from "../Navbar/Navbar";
import Research from "../Research/Research";
import ReviewPage from "../ReviewPage/ReviewPage";
import SearchCollege from "../SearchCollege/SearchCollege";
import TopSchool from "../TopSchool/TopSchool";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <SearchCollege></SearchCollege>
            <Banner></Banner>
            <CollegeSection></CollegeSection>
            <Gallery></Gallery>
            <ReviewPage></ReviewPage>
            <TopSchool></TopSchool>
            <Research></Research>
            <Features></Features>
            

            
        </div>
    );
};

export default Home;