import React from 'react';
import {Text} from 'react-native';

// https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=all,ELEC&state=CA&limit=2&api_key=YHtHJMO4XbWQSlXZSGyKwhMtzDSuvmfWzbbR4mkx

export function StationListScreen() {
  const [stations, setStations] = React.useState([]);
  function fetchStations() {
    const url =
      'https://developer.nrel.gov/api/alt-fuel-stations/v1.json?fuel_type=all,ELEC&state=CA&limit=5&api_key=YHtHJMO4XbWQSlXZSGyKwhMtzDSuvmfWzbbR4mkx';
    fetch(url)
      .then(response => {
        // console.log('*** api response', JSON.stringify(response));
        response
          .json()
          .then(data => {
            console.log(
              '*** fuel_stations',
              JSON.stringify(data.fuel_stations),
            );
            if (data.fuel_stations.length > 0) {
              setStations(data.fuel_stations);
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
  return <Text>StationList</Text>;
}
