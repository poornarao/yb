/**
 * Created by sasidhar on 09/11/17.
 */

import './index.styles.less';

import React, {Component} from 'react';
import Product from "../../components/product/product.jsx";
import Testimonial from "./testimonial.jsx";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";
import GoogleMaps from "../../components/google-maps/google-maps.jsx";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Navbar activePage={'home'}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className={'jumbotron jumbotron-fluid'}>
                                <div className="container">
                                    <div className={'row'}>
                                        <div className={'col-4'}>
                                            <img src={'http://via.placeholder.com/350x380'}/>
                                        </div>
                                        <div className={'col-8'}>
                                            <h1 className="display-4">Welcome to Seeing the Light</h1>
                                            <blockquote className="blockquote pt-2">
                                                <p className="lead text-justify">
                                                    We are a holistic healing clinic that is deeply and profoundly
                                                    committed to the service of humanity. Through our own search for
                                                    optimum health, we have a combined experience of 90 years in
                                                    mind-body-spirit healing and emotional well-being. We have come to
                                                    appreciate our inherent knowing that symptoms are our bodies way of
                                                    indicating we are out of balance. It has become clear that the body
                                                    is miraculous in the way it gets our attention. We must not only
                                                    listen to the symptom, but hear the underlying message. We are
                                                    dedicated to help you hear what your body is trying to tell you.
                                                </p>
                                                <footer className="blockquote-footer">Raymond Dalle</footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'container mt-2 mb-5'}>
                    <div className={'row mb-4'}>
                        <div className={'col'}>
                            <h1 className={'text-center display-4 my-2'}>
                                Our Products
                            </h1>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <div className="card-deck mt-2">
                                <Product/>
                                <Product/>
                                <Product/>
                            </div>
                        </div>
                    </div>
                    <div className={'row mt-5'}>
                        <div className={'col text-center'}>
                            <a href="#" className="btn btn-outline-primary">View More</a>
                        </div>
                    </div>
                </div>
                <div className={'bg-white pt-2 pb-5'}>
                    <div className={'container py-4'}>
                        <div className={'row mb-4'}>
                            <div className={'col'}>
                                <h1 className={'text-center display-4 my-2'}>
                                    Testimonials
                                </h1>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col'}>
                                <Testimonial/>
                            </div>
                        </div>
                    </div>
                </div>
                <GoogleMaps/>
                <Footer/>
            </div>
        );
    }

}

export default Index;