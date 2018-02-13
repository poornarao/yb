import React, {Component} from 'react';

export default class Product extends Component {

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
            <div className="card">
                <img className="card-img-top" src="http://placehold.it/350x300" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Product title</h5>
                    <h6 className="card-title">&#x20B9; 00.00</h6>
                    <p className="card-text text-muted fwl">This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                    <div className={'text-center'}>
                        <a href="#" className="btn btn-primary ">Buy Now</a>
                    </div>
                </div>

            </div>
        );
    }
}