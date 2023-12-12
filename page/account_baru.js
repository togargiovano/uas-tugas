import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert,Image } from 'react-native';


const NewAccountForm = ({ navigation }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [isPlatformPickerVisible, setIsPlatformPickerVisible] = useState(false);
  const [accountName, setAccountName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleBackPress = () => {
     navigation.replace('MainMenu');
  };

  const handlePlatformButtonClick = () => {
    setIsPlatformPickerVisible(!isPlatformPickerVisible);
  };

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    setIsPlatformPickerVisible(false);
  };

  const handleSave = async () => {
    // Data untuk dikirim ke API
    const requestData = {
      dataSource: 'Cluster0',
      database: 'puppet_uas',
      collection: 'account',
      document: {
        account_type: selectedPlatform,
        account_name: accountName,
        email: email,
        account_password: password,
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
      Alert.alert('Info', 'Data Account Berhasil Disimpan!');
      navigation.replace('ListAccount');
    } catch (error) {
      console.error('Error Menyimpan Data:', error.message);
      // Menampilkan pesan alert jika terjadi kesalahan
      Alert.alert('Error', 'Coba Cek Kembali Data yang di input');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBackPress}>
         <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png' }}
          style={styles.headerIcon2}
        />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Account</Text>
      </View>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Platform Selection */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Platform</Text>
          <View style={styles.platformInputContainer}>
            <TextInput
              style={styles.platformInput}
              value={selectedPlatform}
              placeholder="Select Platform"
              editable={false}
            />
            <TouchableOpacity
              style={styles.platformButton}
              onPress={handlePlatformButtonClick}
            >
              <Text style={styles.platformButtonText}>▼</Text>
            </TouchableOpacity>
          </View>
          {isPlatformPickerVisible && (
            <View style={styles.platformPickerContainer}>
              <TouchableOpacity onPress={() => handlePlatformSelect('jobstreet')}>
                <Text style={styles.platformPickerItem}>Jobstreet</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handlePlatformSelect('facebook')}>
                <Text style={styles.platformPickerItem}>Facebook</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {/* Account Name */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Account Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter account name"
            value={accountName}
            onChangeText={(text) => setAccountName(text)}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  headerIcon2: {
    width: 20,
    height: 10,
    marginLeft: -9,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
     marginLeft: 12,
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  platformInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  platformInput: {
    flex: 1,
  },
  platformButton: {
    marginLeft: 5,
  },
  platformButtonText: {
    fontSize: 18,
  },
  platformPickerContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  platformPickerItem: {
    fontSize: 16,
    padding: 5,
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
export default NewAccountForm;
