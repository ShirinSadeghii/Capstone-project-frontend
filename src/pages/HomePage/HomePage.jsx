import NavBar from "../../components/NavBar/NavBar";
import Hero from '../../components/Hero/Hero';
import SearchBar from "../../components/SearchBar/SearchBar";
import FlightCard from "../../components/FlightCard/FlightCard";
import Footer from "../../components/Footer/Footer";



function HomePage() {
    return (
        <>
            <NavBar />
            <Hero />
            <SearchBar path="flightsearch" />
            <FlightCard />
            <Footer />
        </>
      
    )
}

export default HomePage;