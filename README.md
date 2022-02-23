# learn-react-native

[2022-02-22] Adding navigation wireframe

(1) Get started
(1.1) Add packages
// https://reactnavigation.org/docs/getting-started
  yarn add @react-navigation/native
  yarn add react-native-screens react-native-safe-area-context
  yarn add react-native-gesture-handler
  yarn add react-native-reanimated
  yarn add @react-navigation/native
  yarn add @react-navigation/stack
  yarn add @react-navigation/native-stack
  yarn add @react-navigation/bottom-tabs
  yarn add @react-navigation/material-top-tabs react-native-tab-view react-native-pager-view
  yarn add @react-navigation/drawer

  cd ios && pod install && cd ..

(1.2) Add the following code to the body of MainActivity class:

    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(null);
    }

  and make sure to add an import statement at the top of this file:

    import android.os.Bundle;

  This change is required to avoid crashes related to View state being not persisted consistently across Activity restarts.

