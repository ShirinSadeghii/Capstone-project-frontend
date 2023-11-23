import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import FlightSearch from "../../components/FlightSearch/FlightSearch";






function FlightsPage() {
    const {city} = useParams();

    return (
        <>
            <NavBar />
            <SearchBar />
            <FlightSearch city={city} />
            <Footer />
        </>
      
    )
}

export default FlightsPage;