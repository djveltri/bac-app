// // App.js
// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import { GlobalProvider } from './GlobalContext';
// import Bac from './Bac'; // Import the Bac component

// export default function App() {
//   return (
//     <GlobalProvider>
//       <View style={styles.container}>
//         <Bac />
//         <StatusBar style="auto" />
//       </View>
//     </GlobalProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// App.js

// NAVIGATION VERSION BELOW

// App.js 
// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import { GlobalProvider } from './GlobalContext';
// import Navigation from './Navigation';

// export default function App() {
//   return (
//     <GlobalProvider>
//       <View style={styles.container}>
//         <Navigation />
//         <StatusBar style="auto" />
//       </View>
//     </GlobalProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bac from './Bac';
import UserData from './UserData';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Bac" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Bac" component={Bac} />
        <Stack.Screen name="UserData" component={UserData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
