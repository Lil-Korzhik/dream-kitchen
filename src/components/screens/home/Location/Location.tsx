import { FC, useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import config from '@config';
import styles from './Location.module.scss';

const Location = () => {
    const [mapHeight, setMapHeight] = useState<number>(400);

    const containerStyle = {
        width: '100%',
        height: `${mapHeight}px`
    };
      
    const center = {
        lat: 40.7675198039932,
        lng: -81.9932429170221
    };

    useEffect(() => {
        if(window.screen.width < 577) setMapHeight(250);
    }, []);

    return (
        <section className={styles.section} id="location">
            <LoadScript googleMapsApiKey={config.mapApiKey}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                    <></>
                </GoogleMap>
            </LoadScript>
        </section>
    );
}

export default Location;