import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Ganti URL dengan URL API login yang sesuai
    const apiUrl = 'https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/find';
    const apiKey = '8ZQDmrtgC0RX5AVLVQV5YjyS1pA1D7Sa7HZtlTSViEA58X8CUl8mueSLqHd3Md3y';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Api-Key': apiKey,
        },
        body: JSON.stringify({
          database: 'puppet_uas',
          collection: 'users',
          dataSource: 'Cluster0',
          filter: {
            username: username,
            password: password,
          },
        }),
      });

      const result = await response.json();

      // Jika berhasil login
      if (result.documents.length > 0) {
        // Tindakan setelah login berhasil
        Alert.alert('Sukses','Selamat Datang di Main Menu');
        navigation.replace('MainMenu');
      } else {
        // Tampilkan pesan jika login gagal
        Alert.alert('Login Gagal', 'Username atau password salah.');
      }
    } catch (error) {
      console.error('Error:', error);
      // Tampilkan pesan jika ada kesalahan
      Alert.alert('Error', 'Terjadi kesalahan saat melakukan login.');
    }
  };

  const handleForgotPassword = () => {
    Alert.alert(
      'Forgot Password',
      'Maaf, modul lupa kata sandi sedang dalam perbaikan. Silakan coba lagi nanti.',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  };


  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/puppet_new.png')}
        style={styles.logo}
      />
      <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={[styles.button, { width: 300 }]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text>Forgot Your Password </Text>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.signupText}>Click Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffb90f',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  signupText: {
    color: 'blue',
  },
});

export default Login;
