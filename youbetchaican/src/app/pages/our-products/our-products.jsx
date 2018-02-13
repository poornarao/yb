import React, {Component} from 'react';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import Product from "../../components/product/product.jsx";
import FeaturedProducts from "./featured-products.jsx";

export default class OurProducts extends Component {

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
                <Navbar activePage={'our-products'}/>
                <div className={'container py-5'}>
                    <div className={'row'}>
                        <div className={'col'}>
                            <FeaturedProducts/>
                        </div>
                    </div>
                    <div className={'row py-4'}>
                        <div className={'col'}>
                            <div className="card-deck mt-2">
                                <Product/>
                                <Product/>
                                <Product/>
                            </div>
                        </div>
                    </div>
                    <div className={'row py-4'}>
                        <div className={'col'}>
                            <div className="card-deck mt-2">
                                <Product/>
                                <Product/>
                                <Product/>
                            </div>
                        </div>
                    </div>
                    <div className={'row py-4'}>
                        <div className={'col'}>
                            <div className="card-deck mt-2">
                                <Product/>
                                <Product/>
                                <Product/>
                            </div>
                        </div>
                    </div>
                    <div className={'row py-4'}>
                        <div className={'col'}>
                            <div className="card-deck mt-2">
                                <Product/>
                                <Product/>
                                <Product/>
                            </div>
                        </div>
                    </div>
                    <div className={'row py-4'}>
                        <div className={'col'}>
                            <div className="card-deck mt-2">
                                <Product/>
                                <Product/>
                                <Product/>
                            </div>
                        </div>
                    </div>
                    <div className={'row py-4'}>
                        <div className={'col'}>
                            <div className="card-deck mt-2">
                                <Product/>
                                <Product/>
                                <Product/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}