import { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import logo from '../../../assets/logo.png'
import fundo from '../../../assets/fundomobile.png'


import styles from './styles';

export default function Entrada() {
  const [selectedUsuario, setSelectedUsuario] = useState();

  return (
    // <View style={styles.container}>
    <ImageBackground source={fundo} resizeMode="contain" style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.txtLogo}>BLUVA</Text>

        
        <Picker style={styles.pickerWrapper}
  selectedValue={selectedUsuario}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedUsuario(itemValue)
  }>
  <Picker.Item label="Cliente" value="Cliente" />
  <Picker.Item label="Tecnico" value="Tecnico" />
</Picker>
      
      {/* <select id="tipoUsuario">
        <option value="">Selecione</option>
        <option value="usuario">Usuário</option>
        <option value="tecnico">Técnico</option>
      </select> */}
      <Button  style={styles.button} color={'#5a5b65'} title ="Entrar"
          onPress={() => 0}
        /> 
      </View>
        
    </ImageBackground>
    // </View>
  );
}
