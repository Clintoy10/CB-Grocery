import { Link } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
      <Text style={styles.title}>Welcome to <Text style={styles.title2}>CB Grocery</Text> shopping</Text>
      <Text style={styles.subtitle}>Let's get started</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Email or number"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />

      <Link style={styles.signup} href="signin">Sign up</Link>
      <Link style={styles.signin} href="signin">Sign in</Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#B8B8B8',
  },
  formContainer:{
    backgroundColor: '#fff',
    padding: 50,
    borderRadius: 50,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 50)',
  },

  title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'serif'
  },
  title2: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'serif'
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#616161',
    fontFamily: 'serif'
  },
  input: {
    height: 40,
    borderColor: '#121212',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#616161',
    fontFamily: 'serif'
  },
  signin: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'serif'
  },

  signup: {
    height: 40,
    borderColor: '#121212',
    backgroundColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    alignContent: 'center',
    paddingTop: 10,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'serif'
  }
});

export default SignupScreen;