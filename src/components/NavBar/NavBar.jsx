import Logo from '../../assets/Logo.png';
import "../NavBar/NavBar.scss";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
            <div className='nav'>
                <div className='nav__container'>
                    <Link to="/">
                        <img className='nav-logo' src={Logo} alt='logo'></img>
                    </Link>
                </div>
                <div className='nav__container'>
                    <Link to="/flightsearch">
                        <h6 className='nav__pages'>Flights</h6>
                    </Link>
                    <Link to="/hotelsearch">
                        <h6 className='nav__pages'>Hotels</h6>
                    </Link>
                    <h6 className='nav__pages'>Planner</h6>
                </div>
            </div>
    )
}

export default NavBar