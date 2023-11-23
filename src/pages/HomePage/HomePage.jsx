// import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Hero from '../../components/Hero/Hero';
import SearchBar from "../../components/SearchBar/SearchBar";
import FlightCard from "../../components/FlightCard/FlightCard";
import Footer from "../../components/Footer/Footer";



function HomePage() {
// const {city} = useParams();
    return (
        <>
            <NavBar />
            <Hero />
            <SearchBar />
            <FlightCard />
            <Footer />
        </>
      
    )
}

export default HomePage;