import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () =>
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">MEDI CARE</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/services">SERVICES</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/about-us">ABOUT US</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/faq">FAQ</Link>
                        </li>
                        {
                            loggedInUser.isSignedIn &&
                            <>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link" to="/">{loggedInUser.displayName}</Link>
                                </li>
                            </>
                        }
                        <li className="mx-3">
                            {loggedInUser.isSignedIn ? <Link className="nav-link btn btn-outline-warning" to="/" onClick={() => setLoggedInUser({})}>LOG OUT</Link> : <Link className="btn btn-primary text-white" to="/login">LOG IN</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;