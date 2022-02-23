/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../Screens/main-bottom-tab/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Home />);
});
