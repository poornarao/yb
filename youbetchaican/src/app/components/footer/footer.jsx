import React, {Component} from 'react';
import {Link} from "react-router-dom";

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
            <div className={'bg-dark'}>
                <div className={'container py-4'}>
                    <div className={'row'}>
                        <div className={'col-6 offset-3'}>
                            <ul className="nav nav-pills nav-fill">
                                <li className={"nav-ite "}>
                                    <Link className="nav-link" to="">
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
                    </div>
                </div>
            </div>
        );
    }
}

