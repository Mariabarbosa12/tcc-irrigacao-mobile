import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

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

  const togglePower = () => {
    setLigado(!ligado);
  };

  return (
    <ImageBackground source={fundo} resizeMode="cover" style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headerText}>BLUVA</Text>
      </View>

      {/* CONTAINER PRINCIPAL */}
      <View style={styles.contentBox}>
        {/* SENSOR CARDS */}
        <View style={styles.sensorRow}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>UMIDADE</Text>
            <Image source={umidadeImg} style={styles.cardImg} />
            <Text style={styles.cardValue}>100%</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>TEMPERATURA</Text>
            <Image source={temperaturaImg} style={styles.cardImg} />
            <Text style={styles.cardValue}>100%</Text>
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
