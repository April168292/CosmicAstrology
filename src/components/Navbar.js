import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><StarBorderPurple500Icon />Cosmic Astrology</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/zodiac">What's your zodiac?</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Signin">Logout</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Signin">Sign in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/createaccount">Create account</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}



