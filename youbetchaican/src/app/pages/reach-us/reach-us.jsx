import React, {Component} from 'react';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import ContactForm from "./contact-form.jsx";
import GoogleMaps from "../../components/google-maps/google-maps.jsx";

export default class ReachUs extends Component {

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
            <div>
                <Navbar activePage={'reach-us'}/>
                <div className={'container'}>
                    <div className={'row py-5'}>
                        <div className={'col-10 offset-1'}>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
                <div className={'bg-white'}>
                    <div className={'container'}>
                        <div className={'row py-5'}>
                            <div className={'col-6 py-5'}>
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
                            <div className={'col-6'}>
                                <GoogleMaps/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}