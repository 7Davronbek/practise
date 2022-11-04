import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import GoogleMapReact from 'google-map-react';
import { API_KEY } from '../tools/constants'

const Geocode = () => {

    const [latitute, setLatitute] = useState('')
    const [longitute, setLongitute] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords);
            setLatitute(position.coords.latitude)
            setLongitute(position.coords.longitude)
        })
    }, [])

    return (
        <div className='Geocode'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div style={{ height: '100vh', width: '100%' }}>

                          
                        </div>
                        <GoogleMapReact />
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Geocode



