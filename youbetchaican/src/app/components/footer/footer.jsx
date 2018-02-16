import React, {Component} from 'react';
import {Link} from "react-router-dom";
import GoogleMaps from "../../components/google-maps/google-maps.jsx";

export default class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
        console.error(error);
        console.info(info);
    }

    render() {

        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return (
            <footer>
                <div className={'bg-white'}>
                    <div className={'container'}>
                        <div className={'row py-5'}>
                            <div className={'col-3 py-5'}>
                                <h5 className={'my-4'}>Quick Links</h5>
                                <ul className="nav flex-column">
                                    <li className={"nav-ite "}>
                                        <Link className="nav-link" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className={"nav-item"}>
                                        <Link className="nav-link" to="our-products">
                                            Our Products
                                        </Link>
                                    </li>
                                    <li className={"nav-item"}>
                                        <Link className="nav-link" to="about">
                                            About
                                        </Link>
                                    </li>
                                    <li className={"nav-item"}>
                                        <Link className="nav-link" to="reach-us">
                                            Reach us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={'col-4 py-5'}>
                                <h5 className={'my-4'}>Seeing the Light is located at:</h5>
                                <ul className={'list-unstyled fwl'}>
                                    <li className={'my-3'}>
                                        4116 Auburn Blvd.<br/>
                                        Sacramento, CA 95841.
                                    </li>
                                    <li className={'my-3'}>Phone : (916) 483-2020</li>
                                    <li className={'my-3'}>Fax: (916) 483-2121</li>
                                    <li className={'my-3'}>EMail : <a
                                        href={'mailto:info@seeingthelight.com'}> info@seeingthelight.com</a></li>
                                </ul>
                            </div>
                            <div className={'col-5'}>
                                <GoogleMaps/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'bg-dark'}>
                    <div className={'container py-4'}>
                        <div className={'row'}>
                            <div className={'col'}>
                                <span className={'text-light fwl'}>
                                    &copy; 2018 Seeing the Light, All Rights Reserved.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

