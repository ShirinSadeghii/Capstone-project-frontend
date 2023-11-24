import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import HotelSearch from "../../components/HotelSearch/HotelSearch";

function HotelsPage() {
    const {city} = useParams();

    return (
        <>
            <NavBar />
            <SearchBar path="hotelsearch" />
            <HotelSearch city={city} />
            <Footer />
        </>
    )

}

export default HotelsPage