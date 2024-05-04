import React, { useState } from 'react';
import { View, TextInput, Alert,Text } from 'react-native';

import {ButtonComponent} from '../Components/ButtonComponent'
import  {TimePicker} from '../Components/TimePicker'
import {realmContext} from '../realm/RealmContext';
const {useRealm} = realmContext;
import {useUser} from '@realm/react';

const VisitForm = () => {
  const [check, setCheck] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode]=useState('')
//   const [visitTime, setVisitTime]= useState(null)
  
  const realm = useRealm();
  const user = useUser();

  const createItem=()=>{
  if (!hospitalName || !doctorName || !address ||!pinCode ) {
    // Check if inputs are empty
    return;
  }
  try {                       //creating a new obj with user entered details
     realm.write(() => {
    realm.create('visitDetails', 
    {
      hospital: hospitalName, 
      doctor: doctorName, 
      address: address,
      pinCode:pinCode,
    //   visit:visitTime, 
      owner_id: user?.id,
    });
  });
  Alert.alert('Success', 'Data inserted successfully', [
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);

        // Clear the input fields and image
        setHospitalName('');
        setDoctorName('');
        setAddress('');
        setPinCode('')
        // setVisitTime(null);
  } catch (error) {
    Alert.alert('Failed', 'Process Failed', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }
}


  return (
    <View style={{ margin: 10 }}>
      <TextInput
        placeholder="Hospital Name"
        value={hospitalName}
        onChangeText={(text) => setHospitalName(text)}
      />
      <TextInput
        placeholder="Doctor Name"
        value={doctorName}
        onChangeText={(text) => setDoctorName(text)}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TextInput
        placeholder="Pin"
        value={pinCode}
        onChangeText={(text) => setPinCode(text)}
        keyboardType="numeric"
        maxLength={6}
      />
      
        {/* <TimePicker style={{  marginTop: 15 }}/> */}
      
              
        <ButtonComponent title="Add Visit Details" onPress={createItem} marginTop = {20}/>
    </View>
  );
};

export default VisitForm;

