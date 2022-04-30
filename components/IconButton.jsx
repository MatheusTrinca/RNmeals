import { StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const IconButton = ({ name, color, onPress }) => {
  return (
    <Pressable
      android_ripple={{ opacity: 0.7 }}
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons size={24} name={name} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
