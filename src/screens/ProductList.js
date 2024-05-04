import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../ProductListStyles';

import { useUser } from '@realm/react';
import { realmContext } from '../realm/RealmContext';

import { fetchData } from '../api';
import { Product } from '../realm/schema'

const { useRealm, useQuery } = realmContext;

const ProductList = () => {

  const realm = useRealm();
  const data = useQuery(Product).sorted('_id');
  const user = useUser();
  console.log("realm::::", realm);
  console.log("data::::", data);
  console.log("user::::", user);

  useEffect(() => {
    realm.subscriptions.update(function (mutableSubscriptions) {
      mutableSubscriptions.add(realm.objects(Product), { name: 'Product' });   // Add a new subscription.
    });
  }, [realm, user]);

  //---------- User Specific List------------
  // useEffect(() => {
  //   realm.subscriptions.update(function(mutableSubscriptions) {
  //     mutableSubscriptions.add(realm.objects(Product).filtered(`owner_id == "${user?.id}"`), {name: 'Product'});   // Add a new subscription.
  //   });
  // }, [realm ,user]);
  //--------------------------------------------------------------

  return (
    <View style={styles.mainContent}>
      <FlatList
        data={data}
        renderItem={({ item }) => {

          // console.log("item:::::::", item)
          return (
            <View style={styles.productCard}>
              <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/medicine.jpg')}
                  style={{ width: 100, height: 100 }}
                />
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.price}>₹ {item.price}</Text>
                <Text style={styles.productDescription}>Contains - {item.description}</Text>
              </View>
            </View>
          )
        }}
      />
    </View>
  );
};

export default ProductList;
