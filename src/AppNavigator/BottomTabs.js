import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductList from '../screens/ProductList'
import ProductForm from '../screens/ProductForm'
import {LogoutButton} from '../Components/LogOutButton'
import VisitForm from '../screens/VisitForm'

import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

function BottomTabs() {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
        component={ProductList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="list"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Product"
        component={ProductForm}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="add"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={LogoutButton}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="add"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Add Visit Details"
        component={VisitForm}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="add"
              type="material"
              color={color}
              size={size}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
export default BottomTabs