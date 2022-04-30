import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MealListItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

export default MealListItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#d8a596',
    padding: 4,
    borderRadius: 10,
    marginVertical: 4,
    alignItems: 'center',
  },
  text: {
    color: '#3a2002',
  },
});
