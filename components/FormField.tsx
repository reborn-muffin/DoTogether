import React, {FC} from 'react';

import {KeyboardType, View} from 'react-native';
import {HelperText, TextInput} from 'react-native-paper';

interface FormFieldProps {
  placeholder: string,
  handleChange: (text: string) => void,
  keyboardType?: KeyboardType,
  error?: string,
  secureField?: boolean,
}

const FormField: FC<FormFieldProps> = ({placeholder,
                                         handleChange,
                                         error= '',
                                         secureField= false,
                                         keyboardType = 'default'
}) => {
  return (
    <View>
      <TextInput placeholder={placeholder}
                 onChangeText={handleChange}
                 autoCapitalize={'none'}
                 keyboardType={keyboardType}
                 error={error !== ''}
                 secureTextEntry={secureField} />
      {error !== '' && <HelperText type={'error'}>{error}</HelperText>}
    </View>
  );
};

export default FormField;
