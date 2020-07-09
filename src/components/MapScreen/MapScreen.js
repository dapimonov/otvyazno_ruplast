import React, { Component } from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import './MapScreen.scss';
import office from '../../svg/office.svg';
import warehouse from '../../svg/warehouse.svg';

class MapScreen extends Component {
  render() {
    return (
      <YMaps>
        <div className='map'>
          <Map
            defaultState={{ center: [53.13, 63.38], zoom: 5 }}
            height='628px'
            width='100%'
          >
            <Placemark
              geometry={[55.01, 82.55]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: office,
                iconImageSize: [162, 87],
                iconOffset: [-65,-65],
              }}
            />
            <Placemark
              geometry={[56.01, 92.85]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: warehouse,
                iconImageSize: [162, 87],
                iconOffset: [-75,-65],
              }}
            />
            <Placemark
              geometry={[56.74, 60.51]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: warehouse,
                iconImageSize: [162, 87],
                iconOffset: [-75,-65],
              }}
            />
            <Placemark
              geometry={[55.45, 37.36]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: warehouse,
                iconImageSize: [162, 87],
                iconOffset: [-75,-65],
              }}
            />
            <Placemark
              geometry={[45.01, 39.06]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: warehouse,
                iconImageSize: [162, 87],
                iconOffset: [-75,-65],
              }}
            />
          </Map>
        </div>
      </YMaps>
    )
  }
}

export default MapScreen;