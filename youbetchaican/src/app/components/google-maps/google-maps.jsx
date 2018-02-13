import React, {Component} from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";

// this a developer's key. Replace this key with production key.
const API_KEY = "AIzaSyDD2qUW-ShtKjEweTf5BEK0J2XtaUNLKtk";

export default class GoogleMaps extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`,
            location: {
                lat: 17.093229,
                lng: 82.065611
            }
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
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col p-0'}>
                        <MapComponent
                            location={this.state.location}
                            googleMapURL={this.state.googleMapURL}
                            loadingElement={<div style={{height: `100%`}}/>}
                            containerElement={<div style={{height: `400px`}}/>}
                            mapElement={<div style={{height: `100%`}}/>}/>
                    </div>
                </div>
            </div>
        );
    }
}

const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={props.location}>
        <Marker position={props.location}/>
    </GoogleMap>
));