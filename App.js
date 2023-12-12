// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './page/awal';
import Login from './page/akses';
import MainMenu from './page/dashboard';
import NewAccount from './page/account_baru';
import NewList from './page/task_baru';
import ListAccount from './page/isi_account';
import ListTask from './page/isi_task';
import SelectAcount from './page/select_account';
//import View from './Page/Tampil';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="NewAccount" component={NewAccount} />
        <Stack.Screen name="NewList" component={NewList} />
         <Stack.Screen name="ListAccount" component={ListAccount} />
        <Stack.Screen name="ListTask" component={ListTask} />
         <Stack.Screen name="SelectAcount" component={SelectAcount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
