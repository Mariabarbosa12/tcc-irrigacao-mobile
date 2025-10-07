import { useState } from 'react';
import {
View,
Text,
Image,
TouchableOpacity,
ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import fundo from '../../../assets/fundomobile.png';
import logo from '../../../assets/logo.png';
import umidadeImg from '../../../assets/umidade.png';
import temperaturaImg from '../../../assets/temperatura.png';
import gotaImg from '../../../assets/gota.png';
import userImg from '../../../assets/user.png';
import ajudaImg from '../../../assets/ajuda.png';
import ligaImg from '../../../assets/liga.png';

import styles from './styles';

export default function Home({ navigation }) {
const [ligado, setLigado] = useState(true);

// Locais simulados
const locais = [
{ id: 1, nome: 'Estufa 1', umidade: '85%', temperatura: '24°C' },
{ id: 2, nome: 'Estufa 2', umidade: '70%', temperatura: '22°C' },
{ id: 3, nome: 'Laboratório', umidade: '60%', temperatura: '20°C' },
];

// armazenamos só o id selecionado (mais seguro)
const [selectedId, setSelectedId] = useState(locais[0].id);

// derivamos o objeto localSelecionado a cada render
const localSelecionado = locais.find((l) => l.id === Number(selectedId)) || locais[0];

const togglePower = () => {
setLigado(!ligado);
};

return ( <ImageBackground source={fundo} resizeMode="cover" style={styles.container}>
{/* HEADER */} <View style={styles.header}> <Image source={logo} style={styles.logo} /> <Text style={styles.headerText}>BLUVA</Text> </View>


  

  {/* CONTAINER PRINCIPAL */}
  <View style={styles.contentBox}>
    {/* SELETOR DE LOCAL */}
  <View style={styles.selectLocal}>


    {/* Observe: convertemos itemValue com Number() */}
    <Picker
      selectedValue={selectedId}
      onValueChange={(itemValue) => {
        // console.log(typeof itemValue, itemValue); // descomente para debugar
        setSelectedId(Number(itemValue));
      }}
      style={styles.picker}
    >
      {locais.map((local) => (
        <Picker.Item key={String(local.id)} label={local.nome} value={local.id} />
      ))}
    </Picker>
  </View>
    {/* SENSOR CARDS */}
    <View style={styles.sensorRow}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>UMIDADE</Text>
        <Image source={umidadeImg} style={styles.cardImg} />
        <Text style={styles.cardValue}>{localSelecionado.umidade}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>TEMPERATURA</Text>
        <Image source={temperaturaImg} style={styles.cardImg} />
        <Text style={styles.cardValue}>{localSelecionado.temperatura}</Text>
      </View>
    </View>

    {/* BOTÕES */}
    <View style={styles.buttonRow}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Grafico')}
      >
        <Image source={gotaImg} style={styles.iconImg} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Image source={userImg} style={styles.iconImg} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Chat')}
      >
        <Image source={ajudaImg} style={styles.iconImg} />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.iconButton, ligado ? styles.powerOn : styles.powerOff]}
        onPress={togglePower}
      >
        <Image source={ligaImg} style={styles.iconImg} />
      </TouchableOpacity>
    </View>
  </View>
</ImageBackground>


);
}
