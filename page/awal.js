// Splash.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Pindah ke halaman login setelah 5 detik
    const timeout = setTimeout(() => {
      navigation.replace('Login');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/puppet_new.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffb90f', // Ganti warna latar belakang menjadi kuning
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Splash;
