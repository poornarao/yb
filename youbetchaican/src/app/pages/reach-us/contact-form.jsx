import React, {Component} from 'react';

export default class ContactForm extends Component {

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
                <div className="card-header">
                    Contact us
                </div>
                <div className="card-body">
                    <form>
                        <div className={'row'}>
                            <div className={'col-6'}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputName">Name</label>
                                    <input type="text" className="form-control" id="exampleInputName"
                                           placeholder="Enter name"/>
                                </div>
                            </div>
                            <div className={'col-6'}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPhone">Phone</label>
                                    <input type="text" className="form-control" id="exampleInputName"
                                           placeholder="Enter phone number"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone
                                else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                      placeholder={'Leave your message hre...'}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}