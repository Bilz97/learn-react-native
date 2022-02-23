import * as React from 'react';
// import {SectionList, View, Text} from 'react-native';
import {View, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
// import {DrawerActions} from '@react-navigation/native';
// import {QuickTestButton} from '../../Components/widgets';
// import {MainBottomTabNavigator} from '../MainBottomTab';
import {styles} from './style';

export function MainDrawerNavigator() {
  return (
    <View style={styles.baseView}>
      <Text>Drawer</Text>
    </View>
  );
}

// type DrawerParamList = {
//   MainBottomTab: {};
// };
// const Drawer = createDrawerNavigator<DrawerParamList>();
// export function MainDrawerNavigator() {
//   return (
//     <Drawer.Navigator drawerContent={props => <DrawContent {...props} />}>
//       <Drawer.Screen name="MainBottomTab" component={MainBottomTabNavigator} />
//     </Drawer.Navigator>
//   );
// }

// function SectionSeparator() {
//   return <View style={styles.sectionSeparator} />;
// }

// function ItemSeparator() {
//   return <View style={styles.itemSeparator} />;
// }

// type DrawerListItem = {
//   id: string;
//   title: string;
//   subtitle?: string;
//   // icon: .../
// };
// type DrawerListSection = {
//   id: string;
//   title: string;
//   data: DrawerListItem[];
// };

// function DrawContent({navigation}: DrawerContentComponentProps) {
//   const listData = React.useMemo(() => {
//     const sections: DrawerListSection[] = [
//       {
//         id: 'user',
//         title: 'Hi, User!',
//         data: [
//           {
//             id: 'profile',
//             title: 'Profile',
//             subtitle: 'Manage your personal details',
//           },
//           {
//             id: 'pay',
//             title: 'Pay with GasBuddy',
//             subtitle: 'Save up to 25¢/gal, join today for free!',
//           },
//           {
//             id: 'cards-and-memberships',
//             title: 'Linked Cards & Memberships',
//             subtitle: 'Manage cards for nearby offers, and more',
//           },
//           {
//             id: 'inbox',
//             title: 'Inbox',
//             subtitle: 'You have no unread messages',
//           },
//           {
//             id: 'share',
//             title: 'Share BasBuddy',
//             subtitle: 'Help your friends save on gas, too',
//           },
//         ],
//       },
//       {
//         id: 'settings',
//         title: 'Settings',
//         data: [
//           {
//             id: 'price-hike',
//             title: 'Price Hike Alerts',
//             subtitle: 'Be notified when prices spike!',
//           },
//           {
//             id: 'finding-gas',
//             title: 'Finding Gas',
//             subtitle: 'Search history, directions, etc.',
//           },
//           {
//             id: 'location-settings',
//             title: 'Location Settings',
//             subtitle: 'Location related permissions',
//           },
//           {
//             id: 'vehicles-and-driving',
//             title: 'Vehicles & Driving',
//             subtitle: 'Drives, data export, etc.',
//           },
//         ],
//       },
//       {
//         id: 'support',
//         title: 'Support',
//         data: [
//           {
//             id: 'help-and-faqs',
//             title: 'Help & FAQs',
//             subtitle: 'Looking for help? Look no further!',
//           },
//           {
//             id: 'about',
//             title: 'About GasBuddy',
//             subtitle: 'Terms, privacy policy, and more',
//           },
//         ],
//       },
//     ];
//     return sections;
//   }, []);

//   function renderItem({item}: {item: DrawerListItem}) {
//     return (
//       <View>
//         <Text>{item.title}</Text>
//         {item.subtitle && <Text>{item.subtitle}</Text>}
//       </View>
//     );
//   }

//   function renderSectionHeader({section}: {section: DrawerListSection}) {
//     return (
//       <View>
//         <Text>{section.title}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.baseView}>
//       <QuickTestButton
//         title={'Close'}
//         bordered
//         onPress={() => {
//           navigation.dispatch(DrawerActions.closeDrawer);
//         }}
//       />
//       <SectionList
//         sections={listData}
//         keyExtractor={(item, index) => `${index}-${item.id}`}
//         renderItem={renderItem}
//         renderSectionHeader={renderSectionHeader}
//         ItemSeparatorComponent={ItemSeparator}
//         SectionSeparatorComponent={SectionSeparator}
//       />
//     </View>
//   );
// }
