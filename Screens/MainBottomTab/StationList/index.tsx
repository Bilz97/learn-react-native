import React from 'react';
import {Text, View, Button, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {StationMap, Station} from './StationMap';

// https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=all,ELEC&state=CA&limit=2&api_key=YHtHJMO4XbWQSlXZSGyKwhMtzDSuvmfWzbbR4mkx

export function StationListScreen() {
  const [stations, setStations] = React.useState<Station[]>([]);
  const [showMap, setShowMap] = React.useState(true);
  const url =
    'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=all,ELEC&state=CA&limit=30&api_key=YHtHJMO4XbWQSlXZSGyKwhMtzDSuvmfWzbbR4mkx';

  const fetchStations = React.useCallback(() => {
    fetch(url)
      .then(response => {
        response.json().then(data => {
          if (data.fuel_stations.length) {
            console.log('number of stations', data.fuel_stations.length);
            setStations(data.fuel_stations);
          }
        });
      })
      .catch(error => {
        console.log('*** fetchStations() failed', JSON.stringify(error));
      });
  }, []);

  const renderStationRow = ({item}: {item: Station}) => (
    <TouchableOpacity style={[styles.container, styles.stationRow]}>
      <Text>{item.id}</Text>
      <Text>{item.station_name}</Text>
      <Text>{item.latitude}</Text>
      <Text>{item.longitude}</Text>
    </TouchableOpacity>
  );

  React.useEffect(() => {
    fetchStations();
  }, [fetchStations]);

  return (
    <View style={styles.container}>
      <View style={styles.viewMapButton}>
        <Button
          title={showMap ? 'List' : 'Map'}
          onPress={() => {
            setShowMap(!showMap);
          }}
        />
      </View>
      <View>
        <View
          style={[
            {display: showMap ? 'flex' : 'none'},
            styles.fullWidthAndHeight,
          ]}>
          <StationMap stations={stations} />
        </View>
        <View style={{display: showMap ? 'none' : 'flex'}}>
          <Text>Station List</Text>
          <FlatList
            data={stations}
            renderItem={item => renderStationRow(item)}
            keyExtractor={(item, index) => `${item.id}-${index}`}
          />
        </View>
      </View>
    </View>
  );
}
