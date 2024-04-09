import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css';
import Pin from '../pin/Pin';
// import { useLoaderData } from 'react-router';

const Map = ({ items }) => {
    // const post = useLoaderData();

    return (
        <MapContainer center={
            items.length === 1
                ? [items[0].latitude, items[0].longitude]
                : [52.4797, -1.90269]
        }
            zoom={7}
            scrollWheelZoom={false}
            className='map'
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {items.map(item => (
                <Pin key={item.id} item={item} />
            ))}
        </MapContainer>
    )
}

export default Map