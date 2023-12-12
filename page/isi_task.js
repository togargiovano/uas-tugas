import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ListAccount = ({ navigation }) => {
  const [accountData, setAccountData] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    // Panggil API di sini
    fetch('https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/find', {
      method: 'POST',
      headers: {
        'Api-Key': '8ZQDmrtgC0RX5AVLVQV5YjyS1pA1D7Sa7HZtlTSViEA58X8CUl8mueSLqHd3Md3y',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dataSource: 'Cluster0',
        database: 'puppet_uas',
        collection: 'task',
        filter: {
          account_id: { "$regex": searchName, "$options": "i" } // Case-insensitive regex search
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAccountData(data.documents || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [searchName]);

  const handleImageClick = () => {
    console.log('Image clicked!');
    navigation.navigate('MainMenu');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleImageClick}>
          <Image
            source={{ uri: 'https://cdn1.iconfinder.com/data/icons/duotone-essentials/24/chevron_backward-512.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>List Of Task</Text>
      </View>

      <TextInput
        style={styles.searchBox}
        placeholder="Search Account ID"
        onChangeText={(text) => setSearchName(text)}
        value={searchName}
      />

      <ScrollView>
        {accountData.map((account) => (
          <View key={account._id} style={styles.accountInfo}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5765/5765536.png' }}
              style={styles.avatar}
            />
            <View style={styles.textInfo}>
              <Text style={styles.accountName}>{account.account_id}</Text>
              <Text style={styles.lastActive}>Initial Id :{account.initial_id}</Text>
              <Text style={styles.lastActive}>Initial Page:{account.initial_page}</Text>
              <Text style={styles.lastActive}>Counter:{account.counter}</Text>
              <View style={styles.horizontalLine} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '100%', // Lebar garis horizontal mengisi seluruh lebar kontainer
    marginTop: 10, // Sesuaikan dengan kebutuhan Anda
    marginBottom: 10, // Sesuaikan dengan kebutuhan Anda
    flexDirection: 'row', // Mengatur arah dari kanan ke kiri
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textInfo: {
    flexDirection: 'column',
  },
  accountName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastActive: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ListAccount;
