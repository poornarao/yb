import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './navbar.styles.less';
import logo from '../../../assets/bitcoin.png';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const activePage = this.props.activePage;

        return (
            <nav className="navbar navbar-light bg-light sticky-top navbar-expand-lg">
                <div className={'container'}>
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top mr-3" alt="Logo"/>
                        YouBetchalCan
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarPrimary" aria-controls="navbarPrimary"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarPrimary">
                        <ul className="navbar-nav ml-auto">
                            <li className={"nav-item " + (activePage === 'home' ? 'active' : '')}>
                                <Link className="nav-link" to="">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className={"nav-item " + (activePage === 'our-products' ? 'active' : '')}>
                                <Link className="nav-link" to="our-products">
                                    Our Products
                                </Link>
                            </li>
                            <li className={"nav-item dropdown " + (activePage === 'services' ? 'active' : '')}>
                                <Link className="nav-link dropdown-toggle" to="about" id="servicesMenu"
                                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="servicesMenu">
                                    <Link className="nav-link" to="services">
                                        Services
                                    </Link>
                                    <Link className="nav-link" to="counselings">
                                        Counselings
                                    </Link>
                                    <Link className="nav-link" to="brain-integrations">
                                        Brain Integration
                                    </Link>
                                    <Link className="nav-link" to="client-handouts">
                                        Clients Handouts
                                    </Link>
                                </div>
                            </li>
                            <li className={"nav-item " + (activePage === 'about' ? 'active' : '')}>
                                <Link className="nav-link" to="about">
                                    About
                                </Link>
                            </li>
                            <li className={"nav-item " + (activePage === 'reach-us' ? 'active' : '')}>
                                <Link className="nav-link" to="reach-us">
                                    Reach us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Navbar;