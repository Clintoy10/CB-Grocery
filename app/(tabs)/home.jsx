import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';
import searchIcon from '../../assets/icons/search.png' ; 
import notificationIcon from '../../assets/icons/notification.png' ;

const Home = () => {
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
    <View style={styles.container2}>
      <Text style={styles.categoriesTitle}>All Categories</Text>
      <View style={styles.categories}>
        <View style={styles.category}>
          <Image source={require('../../assets/icons/household.png')} style={styles.categoryIcon}/>
          <Text style={styles.text}>Household</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../../assets/icons/grocery.png')} style={styles.categoryIcon}/>
          <Text style={styles.text}>Grocery</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../../assets/icons/liquor.png')} style={styles.categoryIcon}/>
          <Text style={styles.text}>Liquor</Text>
        </View>
        <View style={styles.category}>
          <Image source={require('../../assets/icons/chilled.png')} style={styles.categoryIcon}/>
          <Text style={styles.text}>Chilled</Text>
        </View>
      </View>
    </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Grocery Member Deals</Text>
        <View style={styles.deals}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.dealWrapper}>
              <View style={styles.dealContainer}>
                <View style={styles.deal}>
                  <Image source={require('../../assets/image/garlic.png')} style={styles.dealImage} />
                    <View style={styles.dealInfo}>
                      <Text style={styles.dealTitle}>Garlic</Text>
                        <Text style={styles.dealPrice}>Php 40.00</Text>
                    </View>
                </View>
              </View>
              <View style={styles.dealContainer}>
                <View style={styles.deal}>
                  <Image source={require('../../assets/image/onion.png')} style={styles.dealImage} />
                    <View style={styles.dealInfo}>
                      <Text style={styles.dealTitle}>Onion</Text>
                        <Text style={styles.dealPrice}>Php 60.00</Text>
                    </View>
                  </View>
              </View>
              <View style={styles.dealContainer}>
                <View style={styles.deal}>
                  <Image source={require('../../assets/image/tomato.png')} style={styles.dealImage} />
                    <View style={styles.dealInfo}>
                      <Text style={styles.dealTitle}>Tomato</Text>
                        <Text style={styles.dealPrice}>Php 50.00</Text>
                    </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Grocery Deals</Text>
        <View style={styles.deals}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.dealWrapper}>
              <View style={styles.dealContainer}>
                <View style={styles.deal}>
                  <Image source={require('../../assets/image/corn.png')} style={styles.dealImage} />
                    <View style={styles.dealInfo}>
                      <Text style={styles.dealTitle}>Sweet corn</Text>
                        <Text style={styles.dealPrice}>Php 80.00</Text>
                    </View>
                </View>
              </View>
              <View style={styles.dealContainer}>
                <View style={styles.deal}>
                  <Image source={require('../../assets/image/banana.png')} style={styles.dealImage} />
                    <View style={styles.dealInfo}>
                      <Text style={styles.dealTitle}>Banana</Text>
                        <Text style={styles.dealPrice}>Php 60.00</Text>
                    </View>
                  </View>
              </View>
              <View style={styles.dealContainer}>
                <View style={styles.deal}>
                  <Image source={require('../../assets/image/cabbage.png')} style={styles.dealImage} />
                    <View style={styles.dealInfo}>
                      <Text style={styles.dealTitle}>Cabbage</Text>
                        <Text style={styles.dealPrice}>Php 80.00</Text>
                    </View>
                </View>
              </View>
            </View>
          </ScrollView>
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
  container2: {
    width: 450,
    height: 180,
    backgroundColor: '#fff',
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
  headerIcon: {
    width: 25,
    height: 25,
    marginLeft: 15,
  },
  categoriesTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 25,
    fontFamily: 'serif',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  category: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginRight: 10,
  },
  categoryText: {
    marginTop: 5,
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },

  deals: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 250,
  },
  deal: {
    width: 180,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
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
  dealWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  
  dealContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  dealImage: {
    width: 160,
    height: 130,
    borderRadius: 10,
    },
    dealInfo: {
      marginTop: 10,
    },
    dealTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'serif',
    },
    dealPrice: {
      fontSize: 15,
      color: '#888',
    },
    menuIcon: {
      width: 50,
      marginBottom: 10,
      fontSize: 50,
    },
    text: {
      marginTop: 10,
    }

});

export default Home;