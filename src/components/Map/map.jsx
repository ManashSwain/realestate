import React from 'react';
import './map.scss';
import 'leaflet/dist/leaflet.css';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import Pin from '../pin/pin';


const map = ({items}) => {
  return (
   <>
   <MapContainer  center={[52.497, -1.90269]} zoom={7} scrollWheelZoom={false} className='map mapcontainer'>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {items.map(item=>(
    <Pin item={item} key={item.id}/>
  ))}
</MapContainer>

   </>
  )
}

export default map
