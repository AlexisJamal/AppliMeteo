import React from 'react';
import {View, SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import About from './components/about.js';
import Search from './components/Search.js';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator tabBarOptions={{
          showIcon: true,
          showLabel: false,
          indicatorStyle: {
              height: 2,
              backgroundColor: "#FFF"
          },
          style: {
              backgroundColor: "#a2273C",
              borderTopWidth: 1,
              borderColor: "#3f101c"
          }
      }}>
        <Tab.Screen name="About" component={About} options={{
            tabBarIcon: () => {
                return <Image source={require('./icons/home.png')} style={{width:20, height:20}}/>
            }
        }} />
        <Tab.Screen name="Search" component={Search} options={{
            tabBarIcon: () => {
                return <Image source={require('./icons/user.png')} style={{width:20, height:20}}/>
            }
        }} />
      </Tab.Navigator>
  );
}

export default class App extends React.Component {
  render () {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
        </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a2273C"
    },
});
