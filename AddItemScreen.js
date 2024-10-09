/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, TextInput, Button, Picker, Alert } from 'react-native';
import { MenuItem, courses } from '../types';

export default function AddMenuItem() {
  const { setMenuItems } = route.params;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState(courses[0]);
  const [price, setPrice] = useState('');

  const addItem = () => {
    const priceValue = parseFloat(price);
    if (name && description && !isNaN(priceValue)) {
      const newItem: MenuItem = {
        id: Date.now(),
        name,
        description,
        course,
        price: priceValue,
      };
      setMenuItems((prevItems: MenuItem []) => [...prevItems, newItem]);
      Alert.alert('Item added!');
      setName('');
      setDescription('');
      setCourse(courses[0]);
      setPrice('');
    } else {
      Alert.alert('Please fill all fields correctly.');
    }
  };

  return (
    <View>
      <TextInput placeholder="Dish Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} />
      <Picker selectedValue={course} onValueChange={(itemValue) => setCourse(itemValue)}>
        {courses.map((course) => (
          <Picker.Item key={course} label={course} value={course} />
        ))}
      </Picker>
      <TextInput placeholder="Price" value={price} keyboardType="numeric" onChangeText={setPrice} />
      <Button title="Add Menu Item" onPress={addItem} />
    </View>
  );
};

//export default AddItemScreen;
