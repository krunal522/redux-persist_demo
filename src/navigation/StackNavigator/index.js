import React from 'react';
import { ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Userprofile from '../../components/userProfile/index';
import Viewtodo from '../../components/viewTodos';
import colors from '../../utils/colors/index';
import Todoscreen from '../../containers/todoDetails';
import Addtodo from '../../components/addTodo';
import Checktodolist from '../../components/checkTodoList';
import Checklist from '../../components/checkList/index';


const App = () => {
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const BottomTabScreen = (focused) => {
    return (
      <Tab.Navigator
        screenOptions={{
          // headerShown: false,
          tabBarInactiveTintColor: '#C0C0C0',
          tabBarStyle: {
            // height: 50,
          },
          tabBarSelectedItemStyle: {
            borderBottomWidth: 2,
            borderBottomColor: 'red',

          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 0,
            alignSelf: "center",
            justifyContent: 'center',
            marginVertical: 0,
            marginBottom: 6,
            paddingVertical: 0,
          },
          tabBarStyle: {
            height: 60,
            // borderTopColor:'#efbb55',
            // borderTopWidth:2,
            backgroundColor: colors.green
          }

        }}
        barStyle={{ backgroundColor: colors.green }}
      >
        <Tab.Screen
          name="Home"
          component={Todoscreen}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarLabel: () => { return null },
            tabBarIcon: ({ focused, size }) => {
              return focused ? (
                <ImageBackground
                  resizeMode='contain'
                  source={require('../../assets/bottomTabIcon/listView.png')}
                  style={{ width: 24, height: 24, alignSelf: 'center', alignItems: 'center', }}
                />
              ) : (
                <ImageBackground
                  resizeMode='contain'
                  source={require('../../assets/bottomTabIcon/listIconUnActive.png')}
                  style={{ width: 24, height: 24, alignSelf: 'center', alignItems: 'center' }}
                />
              );
            },

          }}
        />
        <Tab.Screen
          name="checked"
          component={Checklist}
          options={{
            tabBarLabel: 'checked',
            headerShown: false,
            tabBarLabel: () => { return null },
            tabBarIcon: ({ focused, size }) => {
              return focused ? (
                <ImageBackground
                  resizeMode='contain'
                  source={require('../../assets/bottomTabIcon/activeChecked.png')}
                  style={{ width: 24, height: 24, alignSelf: 'center', alignItems: 'center', }}
                />
              ) : (
                <ImageBackground
                  resizeMode='contain'
                  source={require('../../assets/bottomTabIcon/addTodoUnactive.png')}
                  style={{ width: 24, height: 24, alignSelf: 'center', alignItems: 'center' }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Addtodo"
          component={Addtodo}
          options={{
            tabBarLabel: 'Addtodo',
            headerShown: false,
            tabBarLabel: () => { return null },
            tabBarIcon: ({ focused, size }) => {
              return focused ? (
                <ImageBackground
                  resizeMode='contain'
                  source={require('../../assets/bottomTabIcon/addTodoActive.png')}
                  style={{ width: 24, height: 24, alignSelf: 'center', alignItems: 'center', }}
                />
              ) : (
                <ImageBackground
                  resizeMode='contain'
                  source={require('../../assets/bottomTabIcon/addTodo.png')}
                  style={{ width: 24, height: 24, alignSelf: 'center', alignItems: 'center' }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Viewtodo"
          component={Viewtodo}
          options={{
            tabBarLabel: 'Viewtodo',
            headerShown: false,
            tabBarLabel: () => { return null },
            tabBarIcon: ({ focused, size }) => {
              return focused ? (
                <ImageBackground
                  resizeMode='contain'
                  source={require('../../assets/bottomTabIcon/viewTodoActive.png')}
                  style={{ width: 24, height: 24, alignSelf: 'center', alignItems: 'center', }}
                />
              ) : (
                <ImageBackground
                  resizeMode='contain'
                  source={require('../../assets/bottomTabIcon/viewTodo.png')}
                  style={{ width: 24, height: 24, alignSelf: 'center', alignItems: 'center' }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Userprofile" component={Userprofile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
