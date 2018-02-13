import React, {Component} from 'react';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
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
                <Navbar activePage={'about'}/>
                <div className={'bg-light'}>
                    <div className="container py-5">
                        <div className="row py-5">
                            <div className={'col-8'}>
                                <h1 className="display-4">Raymond Dalle</h1>
                                <p className="lead fwl text-justify">
                                    Raymond has spent the last nineteen years illuminating his past in order to come
                                    closer to the path of integrity, clarity and service. Through this process he has
                                    researched and studied the modalities in which he has become certified. He has a
                                    unique perspective on healing because his first motivation was to heal himself. He
                                    has found a home in his heart's work as an Ayurvedic Practitioner with emphasis on
                                    Jyotish (Ayurvedic Astrology). Also he is certified in Brain Integration Therapy and
                                    Ocular Light Therapy.
                                </p>
                            </div>
                            <div className={'col-4'}>
                                <img src={'http://via.placeholder.com/272x272'}/>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col'}>
                                <h5>Education:</h5>
                                <ul className="list-unstyled fwl">
                                    <li>
                                        Certified Jyotish (Ayruvedic Astrology) Practitioner, training with Dr. Suhas
                                        Kshirsagar, 2008.
                                    </li>
                                    <li>
                                        Certified Ayurvedic Practitioner, Registered Through NAMA, training with Dr.
                                        Paul Dugliss, 2008.
                                    </li>
                                    <li>
                                        Certified as a Brain Integration Therapist, 1997.
                                    </li>
                                    <li>
                                        Certified as an Ocular Light Therapist, 1997.
                                    </li>
                                    <li>
                                        Certified in Jin Shin Jyotsu, 1997.
                                    </li>
                                    <li>
                                        Certified 3rd Degree Reike Master, training with Dr. Gabriel Cousins, 1995.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={'row my-4'}>
                            <div className={'col'}>
                                <p className={'fwl text-justify'}>
                                    While working with Raymond, he brings specific intentions to each client. He intends
                                    to work with clients, having the faith that his highest self will guide him. He
                                    intends to create a program facilitating the client's purpose and goals. He intends
                                    to hold love in his heart for each client while the growth process is taking place.
                                    He intends to stand in a place of clear communication with gratitude, peace and love
                                    for all.
                                </p>
                            </div>
                        </div>
                        <div className={'row my-4'}>
                            <div className={'col'}>
                                <blockquote className="blockquote">
                                    <p className="mb-1">
                                        " There are times in our lives where who we are is more important then what we
                                        want. Serving with love opens doors, and creates peace. "
                                    </p>
                                    <footer className="blockquote-footer">Raymond Dalle</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}