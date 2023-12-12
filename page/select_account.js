import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelectAccount = () => {
  const [accountData, setAccountData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // Panggil API untuk mendapatkan semua data
    fetchAccountData();
  }, []);

  const fetchAccountData = async () => {
    try {
      const response = await fetch(
        'https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/find',
        {
          method: 'POST',
          headers: {
            'Api-Key': '8ZQDmrtgC0RX5AVLVQV5YjyS1pA1D7Sa7HZtlTSViEA58X8CUl8mueSLqHd3Md3y',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            dataSource: 'Cluster0',
            database: 'puppet_uas',
            collection: 'account',
            filter: {},
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Error fetching data');
      }

      const data = await response.json();
      setAccountData(data.documents || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAccountClick = (account) => {
    navigation.navigate('NewList', {
      _id: account._id,
      account_type: account.account_type,
      account_name: account.account_name,
      email: account.email,
    });
  };

  const handleSearch = async (text) => {
    try {
      setSearchText(text);

      const response = await fetch(
        'https://data.mongodb-api.com/app/data-yvczw/endpoint/data/v1/action/find',
        {
          method: 'POST',
          headers: {
            'Api-Key': '8ZQDmrtgC0RX5AVLVQV5YjyS1pA1D7Sa7HZtlTSViEA58X8CUl8mueSLqHd3Md3y',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            dataSource: 'Cluster0',
            database: 'puppet_uas',
            collection: 'account',
            filter: {
              account_name: { '$regex': text }
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Error fetching data');
      }

      const data = await response.json();
      setAccountData(data.documents || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Select Account</Text>
      </View>

      <TextInput
        style={styles.searchBox}
        placeholder="Search name"
        value={searchText}
        onChangeText={(text) => handleSearch(text)}
      />

      {accountData.map((account) => (
        <TouchableOpacity
          key={account._id}
          style={styles.accountInfo}
          onPress={() => handleAccountClick(account)}
        >
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/000/581/999/non_2x/email-icon-vector-illustration.jpg' }}
            style={styles.avatar}
          />
          <View style={styles.textInfo}>
            <Text style={styles.accountName}>{account.account_name}</Text>
            <Text style={styles.lastActive}>{account.email}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
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

export default SelectAccount;
