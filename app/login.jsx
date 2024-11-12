import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.circle}>CB</Text>
      </View>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title2}>CB Grocery <Text style={styles.title3}>Shopping</Text> </Text>
          
      
      <Link style={styles.btn1} href="/signin">Sign in</Link>
      <Link style={styles.btn2} href="/signup">Sign up</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8B8B8',
  },

  title: {
    fontSize: 35,
    fontWeight: '50',
    fontFamily: 'serif',
  },
  title2: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  title3: {
    fontSize: 35,
    fontWeight: '50',
    fontFamily: 'serif',
  },

  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'serif',
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 20,
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  btn1: {
    marginTop: 200,
    padding: 10,
    width: 200,
    borderRadius: 15,
    backgroundColor: '#6DFFF6',
    border: '1px solid rgba(255,255,255,0.1)',
    letterSpacing: 2,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'black',
    paddingLeft: 25,
    fontFamily: 'serif',
    textTransform: 'uppercase',
  },

  btn2: {
    marginTop: 10,
    padding: 10,
    width: 200,
    borderRadius: 15,
    backgroundColor: '#6DFFF6',
    border: '1px solid rgba(255,255,255,0.1)',
    letterSpacing: 2,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: 'black',
    paddingLeft: 25,
    fontFamily: 'serif',
    textTransform: 'uppercase',
  },

  home: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'serif'
  }

})