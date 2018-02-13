import React, {Component} from 'react';

export default class FPItem extends Component {

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
            <div className={"carousel-item " + (this.props.isActive)}>
                <img className="d-block w-100" src="http://placehold.it/1170x280" alt="First slide"/>
            </div>
        );
    }
}