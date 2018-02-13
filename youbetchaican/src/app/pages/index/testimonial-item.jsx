import React, {Component} from 'react';
import logo from '../../../assets/bioRaymond_269x269.png';

export default class TestimonialItem extends Component {

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

            <div className={" py-4 carousel-item " + (this.props.isActive)}>
                <div className={'row'}>
                    <div className={'col-8 offset-2 text-center'}>
                        <img src={logo} alt="Logo" width="120" height="120" className={'d-inline-block rounded-circle'}/>
                        <div className="carousel-content">
                            <h5 className={'py-4'}>Name</h5>
                            <p className={'pb-2'}>Comments</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}