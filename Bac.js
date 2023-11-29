// // Bac.js
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// import UserData from './UserData'; // Import the UserData component
// import { useGlobal } from './GlobalContext';

// const Bac = () => {
//   const { dose, bodyweight, isMale, dr } = useGlobal();
//   const [showUserData, setShowUserData] = useState(false);

//   const handleUserDataButtonPress = () => {
//     setShowUserData(true);
//   };

//   return (
//     <View style={styles.container}>
//       <Button title="User Data" onPress={handleUserDataButtonPress} />
//       <Text>Dose: {dose} grams</Text>
//       <Text>Bodyweight: {bodyweight} grams</Text>
//       <Text>Gender: {isMale ? 'Male' : 'Female'}</Text>
//       <Text>DR: {dr}</Text>

//       {showUserData && <UserData />}

//       <Text>Display BAC here</Text>
//       <Text>Buttons and some stuff</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     paddingHorizontal: 16,
//   },
// });

// export default Bac;
// Bac.js

// NAVIGATION VERSION BELOW

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGlobal } from './GlobalContext';

const Bac = () => {
  const navigation = useNavigation();
  //const { dose, bodyweight, isMale, dr } = useGlobal();

  const handleUserDataButtonPress = () => {
    navigation.navigate('UserData');
  };

  return (
    <View style={styles.container}>
      <Button title="User Data" 
      //onPress={handleUserDataButtonPress}
       />
      <Text>Dose: {dose} grams</Text>
      <Text>Bodyweight: {bodyweight} grams</Text>
      <Text>Gender: {isMale ? 'Male' : 'Female'}</Text>
      <Text>DR: {dr}</Text>

      <Text>Display BAC here</Text>
      <Text>Buttons and some stuff</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});

export default Bac;
