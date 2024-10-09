/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { MenuItem, courses } from '../types';
import MenuList from '../components/MenuList';

export default function HomeScreen() {
  const [menuItems, setMenuItems] = useState<MenuItem>([]);

  const totalItems = menuItems.length;
  const averagePrice = totalItems
    ? (menuItems.reduce((sum, item) => sum + item.price, 0) / totalItems).toFixed(2)
    : '0.00';

  return (
    <View>
      <Text>Total Menu Items: {totalItems}</Text>
      <Text>Average Price: ${averagePrice}</Text>
      <MenuList menuItems={menuItems} />
      <Button title="Add Item" onPress={() => navigation.navigate('Add Item', { setMenuItems })} />
      <Button title="Filter" onPress={() => navigation.navigate('Filter', { menuItems })} />
    </View>
  );
};

//export default HomeScreen;
