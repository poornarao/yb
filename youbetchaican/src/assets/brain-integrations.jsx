import React, {Component} from 'react';
import Footer from "../../components/footer/footer.jsx";
import Navbar from "../../components/navbar/navbar.jsx";

export default class BrainIntegrations extends Component {

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
                <h1 className={'display-4'}>Brain Integrations</h1>
                <Footer/>
            </div>
        );
    }
}