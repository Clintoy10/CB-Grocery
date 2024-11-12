import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  
  const productsData = [
    {
      id: '1',
      name: 'Garlic',
      price: '40.00',
      image: require('../../assets/image/garlic.png'),
      weight: '100g',
    },
    {
      id: '2',
      name: 'White Onion',
      price: '60.00',
      image: require('../../assets/image/onion.png'),
      weight: '100g',
    },
    {
      id: '3',
      name: 'Tomato',
      price: '50.00',
      image: require('../../assets/image/tomato.png'),
      weight: '100g',
    },
    {
      id: '4',
      name: 'Sweet corn',
      price: '80.00',
      image: require('../../assets/image/corn.png'),
      weight: '100g',
    },
    {
      id: '5',
      name: 'Banana',
      price: '60.00',
      image: require('../../assets/image/banana.png'),
      weight: '150g',
    },
    {
      id: '6',
      name: 'Green Cabbage',
      price: '50.00',
      image: require('../../assets/image/cabbage.png'),
      weight: '100g',
    },
  ];

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>Php {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Store"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#697565',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    fontSize: 24,
    marginRight: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: 700,
    paddingHorizontal: 20,
  },
  productItem: {
    width: 180,
    height: 250,
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 160,
    height: 110,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  productName: {
    fontSize: 20,
    fontFamily: 'serif',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productPrice: {
    fontSize: 14,
    color: 'black',
  },
  productList: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});