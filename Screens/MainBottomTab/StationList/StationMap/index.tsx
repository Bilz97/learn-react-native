import React from 'react';
import MapView, {Marker, Region, MapEvent} from 'react-native-maps';
import {View} from 'react-native';
import {styles} from './style';

export type Station = {
  id: number;
  station_name: number;
  latitude: number;
  longitude: number;
};

interface StationMapProps {
  stations: Station[];
}

export const StationMap = ({stations}: StationMapProps) => {
  const mapRef = React.useRef<MapView>(null);
  const [markers, setMarkers] = React.useState<any[]>([]);
  const [region, setRegion] = React.useState<Region>();
  const initialRegion = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  };
  const goToLocation = (e: MapEvent, delta: number = 8) => {
    if (mapRef.current) {
      let _region = {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
        latitudeDelta: delta,
        longitudeDelta: delta,
      };
      mapRef.current.animateToRegion(_region, 0.8 * 1000);
    }
  };

  const onRegionChange = (_rg: Region) => {
    // console.log('region changed::::', rg);
    // setRegion(rg);
  };

  const onRegionChangeComplete = (rg: Region) => {
    setRegion(rg);
  };

  const createMarkers = React.useCallback(() => {
    let mrkrs: any = [];
    stations.map(station => {
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

  const onMapPress = (e: MapEvent) => {
    goToLocation(e);
  };

  const onMarkerPress = (e: MapEvent) => {
    const delta = 0.09;
    e.stopPropagation();
    goToLocation(e, delta);
  };

  const onPanDrag = (_e: MapEvent) => {
    // console.log('pan drag start');
  };

  React.useEffect(() => {
    if (stations) {
      createMarkers();
    }
  }, [createMarkers, stations, markers.length]);

  React.useEffect(() => {
    if (stations[0]) {
      const iRegion = {
        latitude: stations[0].latitude,
        longitude: stations[0].longitude,
        latitudeDelta: 8,
        longitudeDelta: 8,
      };
      setRegion(iRegion);
    }
  }, [stations]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={initialRegion}
        region={region}
        onPress={e => onMapPress(e)}
        onPanDrag={e => onPanDrag(e)}
        onRegionChangeComplete={onRegionChangeComplete}
        onRegionChange={onRegionChange}>
        {markers &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker.coordinates}
              title={marker.station_name}
              onPress={e => onMarkerPress(e)}
            />
          ))}
      </MapView>
    </View>
  );
};
