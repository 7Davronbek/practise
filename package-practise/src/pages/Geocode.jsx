import React from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'
// import GoogleMapReact from 'google-map-react';
// import { API_KEY } from '../tools/constants'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Geocode = () => {

    const [center, setCenter] = useState({
        lat: 41.3127,
        lng: 69.2785,
    });
    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4',
    });

    const onMapClick = (e) => {
        setCenter({
            lat: e?.latLng?.lat(),
            lng: e?.latLng?.lng(),
        });
    };
    console.log(center);


    return (
        <div className='Geocode'>
            <div className="container">
                <div className="row">
                    {/* <GoogleMapReact /> */}
                    {isLoaded ? (
                        <div className="col-12 vh-100">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={17}
                                onClick={onMapClick}
                            >
                                <></>
                            </GoogleMap>
                        </div>
                    ) : (
                        <></>
                    )}

                </div>
            </div>
        </div >
    )
}

export default Geocode



