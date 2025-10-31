import { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import logo from '../../../assets/logoredonda.png'
import fundo from '../../../assets/fundomobile.png'


import styles from './styles';

export default function Entrada({ navigation }) {

  return (

    <ImageBackground source={fundo} resizeMode="stretch" style={styles.container}>
      <View style={styles.containerLogo}>
        <View style={styles.containerLg}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.txtLogo}>BLUVA</Text>
        </View>

        <View style={styles.containerTxt}>

          <Text style={styles.txt}>SEJA BEM-VINDO!</Text>
          {/* <Picker style={styles.pickerWrapper}
            selectedValue={selectedUsuario}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedUsuario(itemValue)
            }>
            <Picker.Item label="Cliente" value="Cliente" />
            <Picker.Item label="Tecnico" value="Tecnico" />
          </Picker> */}

          {/* <select id="tipoUsuario">
          <option value="">Selecione</option>
          <option value="usuario">Usuário</option>
          <option value="tecnico">Técnico</option>
        </select> */}
         
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')} // aqui simula o window.location.href
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
    // </View>
  );
}
