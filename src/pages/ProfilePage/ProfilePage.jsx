import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Profile from "../../components/Profile/Profile";

function ProfilePage({userInfo}) {
    return (
        <>
        <NavBar />
        <Profile userInfo={userInfo} />
        <Footer />
        </>
        
    )
}

export default ProfilePage