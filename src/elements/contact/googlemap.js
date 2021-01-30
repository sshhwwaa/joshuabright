import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Googlemap extends Component {
    static defaultProps = {
        center: {
          lat: -2.18,
          lng: 51.43
        },
        zoom: 11
    };

    render() {
        return (
            <div>
                <div style={{ height: '538px', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{
                        
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={-2.18437}
                        lng={51.43433}
                        text="My Marker"
                    />
                    </GoogleMapReact>
                </div>
            </div>
            

        )
    }
}
export default Googlemap;
