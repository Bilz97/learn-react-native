import React from 'react';
import MapView, {Marker, Region, MapEvent} from 'react-native-maps';
import {styles} from './style';

export type Station = {
  station_name: number;
  latitude: number;
  longitude: number;
};

interface StationMapProps {
  initialRegion: Region;
  stations: Station[];
  region?: Region;
}

export const StationMap = ({initialRegion, stations}: StationMapProps) => {
  const mapRef = React.useRef<MapView>(null);
  const [markers, setMarkers] = React.useState<any[]>([]);

  const goToLocation = (e: MapEvent) => {
    if (mapRef.current) {
      let _region = {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.09,
      };
      mapRef.current.animateToRegion(_region, 0.8 * 1000);
    }
  };

  const onRegionChangeComplete = (rg: Region) => {
    console.log('region change complete::::', rg);
  };

  const renderMarkers = React.useCallback(() => {
    let mrkrs: any = [];
    stations.map(station => {
      console.log(station.station_name);
      const markerToAdd = {
        title: station.station_name,
        coordinates: {
          latitude: station.latitude,
          longitude: station.longitude,
        },
      };
      mrkrs.push(markerToAdd);
    });
    setMarkers(mrkrs);
  }, [stations]);

  React.useEffect(() => {
    if (stations) {
      renderMarkers();
    }
  }, [renderMarkers, stations]);

  return (
    <MapView
      style={styles.map}
      ref={mapRef}
      initialRegion={initialRegion}
      onPress={e => goToLocation(e)}
      onRegionChangeComplete={onRegionChangeComplete}
      region={initialRegion}>
      {markers &&
        markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinates}
            title={marker.station_name}
          />
        ))}
    </MapView>
  );
};
