import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exampleAPI from '../../api/example.api';
import ExampleItem from '../../components/ExampleComponent';
export default function HomeScreen(props, { navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        data = await exampleAPI.getAll();
        setCategories(data);
      } catch (error) {
        console.log('Fail while getting data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      {categories && (
        <FlatList
          contentContainerStyle={styles.container}
          data={categories}
          renderItem={({ item }) => (
            <ExampleItem
              category={item}
              // onPress={() => navigation.navigate('Category', { category: item })}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      {!categories && <Text>Nothing to show</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: '#fff',
    paddingTop: 10,
  },
});
