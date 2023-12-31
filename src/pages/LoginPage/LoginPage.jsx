import NavBar from "../../components/NavBar/NavBar";
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";

function LoginPage({setUserInfo}) {
    return (
        <>
        <NavBar />
        <Login setUserInfo={setUserInfo}/>
        <Footer />
        </>
        
    )
}

export default LoginPage