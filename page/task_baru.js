import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView,Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


const NewList = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { params } = route;
  const { _id, account_type, account_name, email } = params || {};
  const [initialId, SetinitialId] = useState('');
  const [initialPage, SetinitialPage] = useState('');
  const [counter, setCounter] = useState('');

  const [formData, setFormData] = useState({
    selectAccount: account_name || '',
    accountType: account_type || '',
    email: email || '',
    _id: _id || '',
    initialId: '',
    initialPage: '',
    counter: '',
  });

  useEffect(() => {
  setFormData({
    selectAccount: account_name || '',
    accountType: account_type || '',
    email: email || '',
    _id: _id || '',
    initialId: '',
    initialPage: '',
    counter: '',
  });
}, [params]);

  const masukAccount = () => {
    navigation.navigate('SelectAcount');
  };

  const handleBackPress = () => {
    navigation.replace('MainMenu');
  };

  const handleSave = async () => {
    // Data untuk dikirim ke API
    const requestData = {
     /* dataSource: 'Cluster0',
      database: 'puppet_uas',
      collection: 'account',
      document: {
        account_type: selectedPlatform,
        account_name: accountName,
        email: email,
        account_password: password, */

    dataSource:'Cluster0',
    database:'puppet_uas',
    collection:'task',
    document:{
        account_id:_id,
        account_type:account_type,
        email: email,
        initial_id:initialId,
        initial_page:initialPage,
        counter:counter,
      },
    };

    try {
      // Permintaan API
      const response = await fetch(
        'https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/insertOne',
        {
          method: 'POST',
          headers: {
            'Api-Key': '8ZQDmrtgC0RX5AVLVQV5YjyS1pA1D7Sa7HZtlTSViEA58X8CUl8mueSLqHd3Md3y',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        }
      );

      // Periksa status respons
      if (!response.ok) {
        throw new Error('Gagal Menyimpan Data');
      }

      // Tanggapan sukses, tambahkan logika lanjutan di sini jika perlu

      // Menampilkan pesan alert
      Alert.alert('Info', 'Data Task Berhasil Disimpan!');
      navigation.replace('ListTask');
    } catch (error) {
      console.error('Error Menyimpan Data:', error.message);
      // Menampilkan pesan alert jika terjadi kesalahan
      Alert.alert('Error', 'Coba Cek Kembali Data yang di input');
    }
  };

  return (
    <ScrollView style={styles.container}>
     <View style={styles.headerContainer}>
  <TouchableOpacity onPress={handleBackPress} style={styles.headerIconContainer}>
    <Image
      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png' }}
      style={styles.headerIcon2}
    />
  </TouchableOpacity>
  <Text style={styles.headerText}>New List</Text>
</View>
     
        <TextInput
          style={styles.input2}
          placeholder="Select Account"
          value={formData.selectAccount}
          onChangeText={(text) => setFormData({ ...formData, selectAccount: text })}
          editable={false}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Select"
            color="red"
            onPress={masukAccount}
          />
        </View>
   
      <TextInput
        style={styles.input}
        placeholder="Account Type"
        value={formData.accountType}
        onChangeText={(text) => setFormData({ ...formData, accountType: text })}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="id"
        value={formData._id}
        onChangeText={(text) => setFormData({ ...formData, _id: text })}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        editable={false}
      />
      <TextInput
      style={styles.input}
      placeholder="Initial ID"
      value={initialId}
      onChangeText={(text) => SetinitialId(text)}
    />

    <TextInput
      style={styles.input}
      placeholder="Initial Page"
      value={initialPage}
      onChangeText={(text) => SetinitialPage(text)}
    />

    <TextInput
      style={styles.input}
      placeholder="Counter"
      value={counter}
      onChangeText={(text) => setCounter(text)}
    />
       <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Data</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
 headerContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
  marginTop: 8,
},
headerIconContainer: {
  marginRight: 8, // Adjust this value as needed
},
headerIcon2: {
  width: 20,
  height: 20, // Adjust this value as needed
},
headerText: {
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: 12,
},
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  input2: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    marginRight: 8,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 100,
  },
    saveButton: {
    backgroundColor: '#ffb90f',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NewList;
