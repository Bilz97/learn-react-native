import React from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from './style';
import {StationMap, Station} from './StationMap';
import {Region} from 'react-native-maps';

// https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=all,ELEC&state=CA&limit=2&api_key=YHtHJMO4XbWQSlXZSGyKwhMtzDSuvmfWzbbR4mkx

export function StationListScreen() {
  const [stations, setStations] = React.useState<Station[]>([]);
  const [showMap, setShowMap] = React.useState(false);
  const [initialRegion, setInitialRegion] = React.useState<Region>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const url =
    'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=all,ELEC&state=CA&limit=5&api_key=YHtHJMO4XbWQSlXZSGyKwhMtzDSuvmfWzbbR4mkx';

  const fetchStations = React.useCallback(() => {
    fetch(url)
      .then(response => {
        response.json().then(data => {
          if (data.fuel_stations.length) {
            setStations(data.fuel_stations);
          }
        });
      })
      .catch(error => {
        console.log('*** fetchStations() failed', JSON.stringify(error));
      });
  }, []);

  React.useEffect(() => {
    fetchStations();
  }, [fetchStations]);

  React.useEffect(() => {
    if (stations[0]) {
      const iRegion = {
        latitude: stations[0].latitude,
        longitude: stations[0].longitude,
        latitudeDelta: 8,
        longitudeDelta: 8,
      };
      console.log('set initial region', iRegion.latitude);
      setInitialRegion(iRegion);
    }
  }, [stations]);

  return (
    <View style={styles.container}>
      <View style={styles.viewMapButton}>
        <Button
          title={showMap ? 'List' : 'Map'}
          onPress={() => {
            console.log('show map pressed');
            setShowMap(!showMap);
          }}
        />
      </View>
      {showMap ? (
        <StationMap initialRegion={initialRegion} stations={stations} />
      ) : (
        <Text>Station List</Text>
      )}
    </View>
  );
}
