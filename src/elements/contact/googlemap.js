import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Googlemap extends Component {
    static defaultProps = {
        center: {
           lat: 51.4266,
           lng: -2.2204
        },
        zoom: 11
    };

    render() {
        return (
            <div>
                <div style={{ height: '538px', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{
                    key: 'AIzaSyD0t9KKFLr_KMIrnYPM6hQZvoJEKetTHc4',
                    language: 'en'
                        
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={-2.2204}
                        lng={51.4266}
                        text="Home"
                    />
                    </GoogleMapReact>
                </div>
            </div>
            

        )
    }
}
export default Googlemap;
