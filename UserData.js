// // UserData.js
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { useGlobal } from './GlobalContext';

// const UserData = () => {
//   const { dose, setDose, bodyweight, setBodyweight, isMale, setIsMale } = useGlobal();
//   const [editedDose, setEditedDose] = useState(dose.toString());
//   const [editedBodyweight, setEditedBodyweight] = useState(bodyweight.toString());
//   const [editedGender, setEditedGender] = useState(isMale ? 'male' : 'female');

//   const handleUpdate = () => {
//     setDose(parseFloat(editedDose) || 0);
//     setBodyweight(parseFloat(editedBodyweight) || 0);
//     setIsMale(editedGender === 'male');
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Edit Dose:</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         value={editedDose}
//         onChangeText={(text) => setEditedDose(text)}
//       />

//       <Text>Edit Bodyweight:</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         value={editedBodyweight}
//         onChangeText={(text) => setEditedBodyweight(text)}
//       />

//       <Text>Edit Gender:</Text>
//       <TextInput
//         style={styles.input}
//         value={editedGender}
//         onChangeText={(text) => setEditedGender(text)}
//       />

//       <Button title="Update" onPress={handleUpdate} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default UserData;

// NAVIGATION VERSION BELOW

// UserData.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useGlobal } from './GlobalContext';

const UserData = () => {
  const { dose, setDose, bodyweight, setBodyweight, isMale, setIsMale } = useGlobal();
  const [editedDose, setEditedDose] = useState(dose.toString());
  const [editedBodyweight, setEditedBodyweight] = useState(bodyweight.toString());
  const [editedGender, setEditedGender] = useState(isMale ? 'male' : 'female');

  const handleUpdate = () => {
    setDose(parseFloat(editedDose) || 0);
    setBodyweight(parseFloat(editedBodyweight) || 0);
    setIsMale(editedGender === 'male');
  };

  return (
    <View style={styles.container}>
      <Text>Edit Dose:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={editedDose}
        onChangeText={(text) => setEditedDose(text)}
      />

      <Text>Edit Bodyweight:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={editedBodyweight}
        onChangeText={(text) => setEditedBodyweight(text)}
      />

      <Text>Edit Gender:</Text>
      <TextInput
        style={styles.input}
        value={editedGender}
        onChangeText={(text) => setEditedGender(text)}
      />

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default UserData;

