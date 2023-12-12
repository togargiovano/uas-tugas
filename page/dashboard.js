import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity,Alert } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { useNavigation } from '@react-navigation/native';


const ScrapingManagement = () => {

const navigation = useNavigation();

  const handleAccountPress = () => {
    // Navigasi ke halaman AccountScreen (gantilah dengan nama layar yang sesuai)
    navigation.navigate('ListAccount');
  };

  const handleListPress = () => {
    // Navigasi ke halaman AccountScreen (gantilah dengan nama layar yang sesuai)
    navigation.navigate('ListTask');
  };

   const NewAccount = () => {
    // Navigasi ke halaman AccountScreen (gantilah dengan nama layar yang sesuai)
    navigation.navigate('NewAccount');
  };

  const NewList= () => {
    // Navigasi ke halaman AccountScreen (gantilah dengan nama layar yang sesuai)
    navigation.navigate('NewList');
  };

   const report = () => {
    Alert.alert(
      'Modul Report',
      'Maaf, modul Report sedang dalam Perkembangan',
      [
        { text: 'OK', onPress: () => console.log('OK Kembali') }
      ]
    );
  };


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
      
        <Image
          source={{ uri: 'https://www.smanegeri2padangsidimpuan.sch.id/upload/imagecache/99534249iconorang-500x500.jpg' }}
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>Hi,..Togar</Text>
        <Image
          source={{ uri: 'https://i.pinimg.com/550x/6f/5b/57/6f5b578d0fcb21a517164738a30d6549.jpg' }}
          style={styles.headerIcon2}
        />
      </View>

      {/* Legend 1 */}
      <View style={[styles.legendContainer, styles.legendBorder]}>
        <Text style={styles.legendText}>Scrapping Management</Text>
         <Text style={styles.legendText2}>Manage And Setting Your Account To Scrap</Text>
        <View style={styles.gridContainer}>
          {/* Grid 1 */}
          <View style={styles.gridItem}>
            <TouchableOpacity onPress={NewAccount}>
            <Image
              source={{ uri: 'https://w7.pngwing.com/pngs/846/897/png-transparent-user-male-avatar-account-profile-web-ui-color-icon.png' }}
              style={styles.icon}
            />
            
              <Text style={styles.icontext}>Account</Text>
             </TouchableOpacity>
          </View>
          {/* Grid 2 */}
          <View style={styles.gridItem}>
            <TouchableOpacity onPress={NewList}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2098/2098402.png' }}
              style={styles.icon}
            />
              <Text style={styles.icontext}>Task</Text>
               </TouchableOpacity>
          </View>
          {/* Grid 3 */}
          <View style={styles.gridItem}>
           <TouchableOpacity onPress={report}>
            <Image
              source={{ uri: 'https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-report-icon-png-image_3991909.jpg' }}
              style={styles.icon}
            />
            <Text style={styles.icontext}>Report</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.gridContainer}>
          {/* Grid 1 */}
          <View style={styles.gridItem}>
          <TouchableOpacity onPress={handleListPress}>
            <Image
              source={{ uri: 'https://img.freepik.com/premium-vector/account-management-icon-3d-illustration-from-company-management-collection-creative-account-management-3d-icon-web-design-templates-infographics-more_676904-577.jpg' }}
              style={styles.icon}
            />
          <Text style={styles.icontext2}>List Of Task</Text>
           </TouchableOpacity>
          </View>
          {/* Grid 2 */}
          <View style={styles.gridItem}>
           <TouchableOpacity onPress={handleAccountPress}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/9839/9839259.png' }}
              style={styles.icon}
            />
             <Text style={styles.icontext2}>List Of Account</Text>
              </TouchableOpacity>
          </View>
          {/* Grid 3 */}
          <View style={styles.gridItem}>
            <Image
              source={{ uri: '' }}
              style={styles.icon}
            />
          </View>
        </View>
      </View>

      {/* Legend 2 */}
      <View style={[styles.legendContainer, styles.legendBorder]}>
        <Text style={styles.legendText}>Scrapping Activity</Text>
        <Text style={styles.legendText2}>Monitoring Your Activity Progress</Text>
           <View style={styles.progressContainer}>
          <Text style={styles.icontext2}>Total Account (4)</Text>
          <ProgressBar progress={0.4} width={180} color="red" />
        </View>

        {/* Progress Bar 2 */}
        <View style={styles.progressContainer}>
          <Text style={styles.icontext2}>Open Task (60)</Text>
          <ProgressBar progress={0.5} width={180} color="green" />
        </View>

        {/* Progress Bar 3 */}
        <View style={styles.progressContainer}>
          <Text style={styles.icontext2}>In Progress Task</Text>
          <ProgressBar progress={0.75} width={180} color="blue" />
        </View>

        {/* Progress Bar 4 */}
        <View style={styles.progressContainer}>
          <Text style={styles.icontext2}>Closed Task</Text>
          <ProgressBar progress={0.9} width={180} color="purple" />
        </View>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  headerIcon: {
    width: 20,
    height: 20,
    marginRight: 1,
  },
  icontext: {
    fontSize: 9,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  icontext2: {
    fontSize: 9,
    fontWeight: 'bold',
    marginLeft: 0,
  },
  headerIcon2: {
    width: 40,
    height: 20,
    marginLeft: 185,
  },
  headerText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  legendContainer: {
    marginBottom: 20,
  },
  legendBorder: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  legendText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Teks diatur ke tengah
    color: 'red', // Warna teks menjadi merah
  },
  legendText2: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: -9,
    textAlign: 'center', // Teks diatur ke tengah
    color: 'black', // Warna teks menjadi merah
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridItem: {
    flex: 1,
    aspectRatio: 1, // Square aspect ratio
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  icon: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20, // Ganti nilai ini sesuai dengan kebutuhan Anda
  },
});

export default ScrapingManagement;
