import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import FlightSearch from "../../components/FlightSearch/FlightSearch";



function FlightsPage() {
    return (
        <>
            <NavBar />
            <SearchBar />
            <FlightSearch />
            <Footer />
        </>
      
    )
}

export default FlightsPage;