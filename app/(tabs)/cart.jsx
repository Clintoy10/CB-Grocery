import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import searchIcon from '../../assets/icons/search.png' ; 
import notificationIcon from '../../assets/icons/notification.png' ;

export default function Cart() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.menuIcon}>≡</Text>
          <Text style={styles.headerTitle}>Store</Text>
        </View>
        <View style={styles.headerRight}>
          <Image source={searchIcon} style={styles.headerIcon} />
          <Image source={notificationIcon} style={styles.headerIcon} />
        </View>
      </View>
      <View style={styles.cartSummary}>
        <View style={styles.headerLeft}>
          <Text style={styles.subtotal}>Subtotal (4 items)</Text>
          <Text style={styles.subtotalAmount}>Php 620.00</Text>
        </View>
        <View style={styles.headerLeft}>
          <Text style={styles.discount}>Promotion discounts</Text>
          <Text style={styles.discountAmount}>Php -150.00</Text>
        </View>
        <View style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </View>

        <View style={styles.productList}>
          <View style={styles.productItem}>
            <Image source={require('../../assets/image/onion.png')} style={styles.productImage}/>
            <View style={styles.productDetails}>
              <Text style={styles.productName}>White Onion</Text>
              <Text style={styles.productPrice}>Php 120.00</Text>
              <View style={styles.quantityControl}>
                <View style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </View>
                <Text style={styles.quantity}>200g</Text>
                <View style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.productList}>
          <View style={styles.productItem}>
            <Image source={require('../../assets/image/corn.png')} style={styles.productImage}/>
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Sweet Corn</Text>
              <Text style={styles.productPrice}>Php 80.00</Text>
              <View style={styles.quantityControl}>
                <View style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </View>
                <Text style={styles.quantity}>300g</Text>
                <View style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.productList}>
          <View style={styles.productItem}>
            <Image source={require('../../assets/image/banana.png')} style={styles.productImage}/>
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Banana</Text>
              <Text style={styles.productPrice}>Php 180.00</Text>
              <View style={styles.quantityControl}>
                <View style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </View>
                <Text style={styles.quantity}>300g</Text>
                <View style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.productList}>
          <View style={styles.productItem}>
            <Image source={require('../../assets/image/garlic.png')} style={styles.productImage}/>
            <View style={styles.productDetails}>
              <Text style={styles.productName}>Garlic</Text>
              <Text style={styles.productPrice}>Php 120.00</Text>
              <View style={styles.quantityControl}>
                <View style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </View>
                <Text style={styles.quantity}>200g</Text>
                <View style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#697565'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 90,
    backgroundColor: '#697565',
  },
  headerLeft: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10,
    fontFamily: 'serif',
  },
  menuIcon: {
    width: 50,
    marginBottom: 10,
    fontSize: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerIcon: {
    width: 25,
    height: 25,
    marginLeft: 15,
  },
  cartSummary: {
    padding: 20,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  subtotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    fontFamily: 'serif',
  },
  subtotalAmount: {
    fontSize: 16,
    color: '#666',
    marginLeft: 200,
    marginBottom: 30,
  },
  discount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'serif',
  },
  discountAmount: {
    fontSize: 16,
    color: '#666',
    marginLeft: 181,
  },
  productList: {
    padding: 20,
    backgroundColor: '#fff',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productImage: {
    width: 100,
    height: 80,
    marginRight: 100,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    fontFamily: 'serif',
  },
  productPrice: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'serif',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 16,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 10,
  },
  checkoutButton: {
    padding: 10,
    width: 100,
    marginLeft: 300,
    marginTop: 30,
    backgroundColor: '#689f38',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#fff',
  },
});