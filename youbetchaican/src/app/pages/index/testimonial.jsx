import React, {Component} from 'react';
import TestimonialItem from "./testimonial-item.jsx";

export default class Testimonial extends Component {

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
            <div id="carouselTestimonialIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselTestimonialIndicators" data-slide-to="0" className="active"/>
                    <li data-target="#carouselTestimonialIndicators" data-slide-to="1"/>
                    <li data-target="#carouselTestimonialIndicators" data-slide-to="2"/>
                </ol>
                <div className="carousel-inner">
                    <TestimonialItem isActive={'active'}/>
                    <TestimonialItem/>
                    <TestimonialItem/>
                </div>
            </div>
        );
    }
}