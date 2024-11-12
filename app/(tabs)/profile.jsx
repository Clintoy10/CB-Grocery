import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import searchIcon from '../../assets/icons/search.png' ; 
import notificationIcon from '../../assets/icons/notification.png' ;

const Profile = () => {
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
      <View style={styles.profileheader}>
        <View style={styles.headerLeft}>
          <Image source={require('../../assets/image/profile.jpg')} style={styles.profileImage}/>
        </View>
        <View style={styles.Info}>
          <Text style={styles.fName}>Clint D. Baron</Text>
          <Text style={styles.email}>Clintbaron0@gmail.com</Text>
          <Text style={styles.number}>0969 249 8342</Text>
          </View>
      </View>
      <View style={styles.container2}>
      <View style={styles.menu}>
        <View style={styles.menuItem}>
          <View style={styles.rRight}>
            <Image source={require('../../assets/icons/profile.png')} style={styles.pImage}/>
            <Text style={styles.text}>Recipient Details</Text>
          </View>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.rRight}>
            <Image source={require('../../assets/icons/delivery.png')} style={styles.pImage}/>
            <Text style={styles.text}>Delivery Address</Text>
          </View>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.rRight}>
            <Image source={require('../../assets/icons/payment.png')} style={styles.pImage}/>
            <Text style={styles.text}>Payment Method</Text>
          </View>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.rRight}>
            <Image source={require('../../assets/icons/cpassword.png')} style={styles.pImage}/>
            <Text style={styles.text}>Change Password</Text>
          </View>
        </View>
        <View style={styles.menuItem}>
          <View style={styles.rRight}>
            <Image source={require('../../assets/icons/logout.png')} style={styles.pImage}/>
            <Text style={styles.text}>Logout</Text>
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  )
}

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
  profileheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 150,
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
  profileImage: {
    width: 100,
    height: 100,
    marginLeft: 20,
    borderRadius: 50,
  },
  Info: {
    marginRight: 80,
  },
  fName: {
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'serif',
  },
  email: {
    color: '#666',
    fontFamily: 'serif',
    fontSize: 15,
    marginTop: 5,
  },
  number: {
    color: '#666',
    fontFamily: 'serif',
    fontSize: 15,
    marginTop: 5,
  },
  details: {
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 150,
    paddingVertical: 250,
    width: 50,
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pImage: {
    height: 50,
    width: 50,
  },
  container2: {
    width: 300,
    height: 500,
    marginTop: 50,
    marginLeft: 60,
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
  menu: {
    flex: 1,
  },
  menuItem: {
    padding: 25,
  },
  text: {
    fontSize: 20,
    fontFamily: 'serif',
    marginLeft: 10,
    letterSpacing: 2,
  },
  rRight: {
    flexDirection: 'row', 
    alignItems: 'center',
  }
})
export default Profile