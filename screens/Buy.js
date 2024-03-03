import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Buy = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Filter products based on the selected category
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Men's Clothing" value="men's clothing" />
        <Picker.Item label="Women's Clothing" value="women's clothing" />
        <Picker.Item label="Jewelry" value="jewelery" />
        <Picker.Item label="Electronics" value="electronics" />
      </Picker>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
            <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.cardText}>
              
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.price}>${item.price}</Text>
            </View>
            
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  picker: {
    marginBottom: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection:'row'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  cardText:{
    width:'60%',
    marginLeft:20
  }
});

export default Buy;
