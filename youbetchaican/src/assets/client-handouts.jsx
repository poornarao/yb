import React, {Component} from 'react';
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer.jsx";

export default class ClientHandouts extends Component {

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
                <Navbar activePage={'services'}/>
                <h1 className={'display-4'}>Services</h1>
                <Footer/>
            </div>
        );
    }
}