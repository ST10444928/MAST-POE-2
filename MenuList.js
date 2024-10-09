/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuItem } from '../types';

export default function MenuScreen () {
  const navigation = useNavigation();
  const [menuItems, setMenuItems] = useState<MenuItem()>([
  { id: 1, name: 'Salad', description: 'Fresh green salad', course: 'starters', price: 5.99 },
  { id: 2, name: 'Soup', description: 'Creamy tomato soup', course: 'starters', price: 6.49 },     
  { id: 3, name: 'Caesar Salad', description: 'Caesar salad with croutons and parmesan', course: 'starters', price: 8.99 },
  { id: 4, name: 'Steak', description: 'Grilled steak', course: 'mains', price: 19.99 },
  { id: 5, name: 'Pasta', description: 'Spaghetti with marinara sauce', course: 'mains', price: 14.99 },
  { id: 6, name: 'Burger', description: 'Beef burger with cheese and lettuce', course: 'mains', price: 12.99 },
  { id: 7, name: 'Grilled Chicken', description: 'Grilled chicken breast with herbs', course: 'mains', price: 16.49 },
  { id: 8, name: 'Ice Cream', description: 'Vanilla ice cream', course: 'dessert', price: 4.99 },
  { id: 9, name: 'Cheesecake', description: 'Classic New York cheesecake', course: 'dessert', price: 7.99 },
  { id: 10, name: 'Chocolate Cake', description: 'Rich chocolate cake with ganache', course: 'dessert', price: 6.99 }
]);

  const navigateToAddMenuItem = () => {
    navigation.navigate('AddMenuItem', { setMenuItems });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chef's Menu</Text>
      
      <Text>Total Menu Items: {menuItems.length}</Text>
      
      <MenuList menuItems={menuItems} removeItem={removeMenuItem} />

      <View style={styles.buttonsContainer}>
        <Button title="Add Menu Item" onPress={navigateToAddMenuItem} />
        <Button title="Filter Menu" onPress={() => navigation.navigate('FilterScreen', { menuItems })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonsContainer: {
    marginTop: 20,
  },
});

//export default MenuScreen;
