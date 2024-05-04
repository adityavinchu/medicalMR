import React, { useState } from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export const TimePicker = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (event, selected) => {
    setShowPicker(Platform.OS === 'ios');
    if (selected) {
      setSelectedTime(selected);
    }
  };

  return (
    <View>
      <Button title="Select Time" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};


