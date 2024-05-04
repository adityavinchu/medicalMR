import { View, TextInput, Button, Alert,Image } from 'react-native';

export const ButtonComponent = ({marginTop = 10, ...rest}) => (
    <View style={{ marginTop }}>
      <Button
        {...rest}
        />
      </View>
)