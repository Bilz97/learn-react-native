import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
//import MapView from 'react-native-maps';

// https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=all,ELEC&state=CA&limit=2&api_key=YHtHJMO4XbWQSlXZSGyKwhMtzDSuvmfWzbbR4mkx

export interface Station {
  access_code: string;
  access_days_time: string;
  access_detail_code: string;
  cards_accepted: string;
  date_last_confirmed: string;
  expected_date: string;
  fuel_type_code: string;
  groups_with_access_code: string;
  id: number;
  open_date: string;
  owner_type_code: string;
  status_code: string;
  station_name: string;
  station_phone: string;
  updated_at: string;
  facility_type: string;
  geocode_status: string;
  latitude: number;
  longitude: number;
  city: string;
  intersection_directions: string;
  plus4: string;
  state: string;
  street_address: string;
  zip: string;
  country: string;
  groups_with_access_code_fr: string;
  ev_pricing_fr: string;
}

// today's todos:
/*
- make station object
- make UI to display data
- station details
*/
export function StationListScreen() {
  const [stations, setStations] = React.useState<Station[]>([]);
  const [filteredStations, setFilteredStations] = React.useState<Station[]>([]);
  const [isMap, setIsMap] = React.useState(false);

  async function fetchStations() {
    const url =
      'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=all,ELEC&state=CA&limit=10&api_key=YHtHJMO4XbWQSlXZSGyKwhMtzDSuvmfWzbbR4mkx';
    await fetch(url)
      .then(response => {
        // console.log('*** api response', JSON.stringify(response));
        response
          .json()
          .then(data => {
            // console.log(
            //   '*** fuel_stations',
            //   JSON.stringify(data.fuel_stations),
            // );

            if (data.fuel_stations.length > 0) {
              setStations(data.fuel_stations);
              setFilteredStations(data.fuel_stations);
            }
          })
          .catch(reason => {
            console.log(
              '*** fetchStations() jsonfy failed',
              JSON.stringify(reason),
            );
          });
      })
      .catch(error => {
        console.log('*** fetchStations() failed', JSON.stringify(error));
      });
  }

  React.useEffect(() => {
    fetchStations();
  }, []);

  const searchStations = React.useCallback(
    (value: string) => {
      const filtered = stations.filter(element =>
        element.station_name.includes(value),
      );
      setFilteredStations(filtered);
    },
    [stations],
  );

  return (
    <>
      <View
        style={{flexDirection: 'row', marginHorizontal: 5, marginBottom: 15}}>
        <TouchableOpacity onPress={() => setIsMap(false)}>
          <Text
            style={{
              fontSize: 15,
              borderWidth: 1,
              marginHorizontal: 10,
              paddingHorizontal: 5,
            }}>
            List
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsMap(true)}>
          <Text
            style={{
              fontSize: 15,
              borderWidth: 1,
              marginHorizontal: 10,
              paddingHorizontal: 5,
            }}>
            Map
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={{
          backgroundColor: 'white',
          borderWidth: 1,
          marginLeft: 15,
          marginRight: 40,
        }}
        placeholder="type here"
        onChangeText={value => searchStations(value)}
      />
      {isMap ? (
        <Text>Map</Text>
      ) : (
        // <MapView
        //   initialRegion={{
        //     latitude: 36.7783,
        //     longitude: -119.4179,
        //     latitudeDelta: 0.0922,
        //     longitudeDelta: 0.0421,
        //   }}
        // />
        <FlatList
          data={filteredStations}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginVertical: 20,
                  marginHorizontal: 15,
                  backgroundColor: 'lightgrey',
                }}>
                <Text>Station name: {item.station_name} </Text>
                <Text>City: {item.city} </Text>
                <Text>{item.id}</Text>
                <Text>lat: {item.latitude}</Text>
                <Text>long: {item.longitude}</Text>
              </View>
            );
          }}
        />
      )}
    </>
  );
}
