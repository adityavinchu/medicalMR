import React, { useState } from 'react';
import { View, TextInput, Alert,Image } from 'react-native';
import * as DocumentPicker from 'react-native-document-picker'
import {ButtonComponent} from '../Components/ButtonComponent'

import {realmContext} from '../realm/RealmContext';
const {useRealm} = realmContext;
import {useUser} from '@realm/react';

const ProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const realm = useRealm();
  const user = useUser();

  const createItem=()=>{
  if (!productName || !productPrice || !productDescription) {
    // Check if inputs are empty
    return;
  }
  try {                       //creating a new obj with user entered details
     realm.write(() => {
    realm.create('Product', 
    {
      name: productName, 
      price: parseInt(productPrice), 
      description: productDescription,
      image:productImage, 
      owner_id: user?.id,
    });
  });
  Alert.alert('Success', 'Data inserted successfully', [
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

        // Clear the input fields and image
        setProductName('');
        setProductPrice('');
        setDescription('');
        setProductImage(null);
  } catch (error) {
    Alert.alert('Failed', 'Process Failed', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }
}

    const handleImagePicker = async () => {
      try {
        const image=await DocumentPicker.pickSingle({
          type:[DocumentPicker.types.images]
        })
        console.log(image);
        setProductImage(image.uri)
      } catch (error) {
        if(DocumentPicker.isCancel(error))
        {console.log("User cancelled the upload",error);}
        else
        {console.log(error);}
      }
    }

  return (
    <View style={{ margin: 10 }}>
      <TextInput
        placeholder="Product Name"
        value={productName}
        onChangeText={(text) => setProductName(text)}
      />
      <TextInput
        placeholder="Product Price"
        value={productPrice}
        onChangeText={(text) => setProductPrice(text)}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Product Description"
        value={productDescription}
        onChangeText={(text) => setDescription(text)}
      />
      {productImage && (
        <Image
          source={{ uri: productImage }}
          style={{ width: 200, height: 200, marginTop: 15 }}
        />
      )}
      <ButtonComponent
          title="Select Image"
          onPress={async () => await handleImagePicker()}
          color={productImage ? 'green' : null} 
        />
              
        <ButtonComponent title="Add Product To List" onPress={createItem} marginTop = {20}/>
    </View>
  );
};

export default ProductForm;

