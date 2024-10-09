/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { MenuItem } from '../types';

export default function FilterScreen() {
  const { menuItems } = route.params;
  const [selectedCourse, setSelectedCourse] = useState<string>('Starters');

  const filteredItems = menuItems.filter(item => item.course === selectedCourse);

  return (
    <View>
      <Picker selectedValue={selectedCourse} onValueChange={(itemValue) => setSelectedCourse(itemValue)}>
        {courses.map((course) => (
          <Picker.Item key={course} label={course} value={course} />
        ))}
      </Picker>
      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name} - ${item.price.toFixed(2)}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

//export default FilterScreen;
