import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

import logo from '../../../assets/logo.png';
import fundo from '../../../assets/fundomobile.png';
import voltar from '../../../assets/voltar.png';

import styles from './styles';

export default function Grafico({ navigation }) {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX','SAB'],
    datasets: [
      {
        data: [400, 220, 330, 500, 330, 400],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: 'rgba(255, 255, 255, 0)' ,
    backgroundGradientTo: 'rgba(255, 255, 255, 0)',
    decimalPlaces: 0,
    barPercentage: 0.7,
    fillShadowGradient: '#191e5aff',       
    fillShadowGradientOpacity:1,        
    color: () => '#191e5aff',
    labelColor: () => '#000',
     propsForLabels: {
    fontSize: 12,      
    fontWeight: 'bold',
    dy: -5,
     fontFamily: 'Lucida Sans',
  },

    propsForBackgroundLines: {
      stroke: 'rgba(39, 37, 37, 0.83)', 
      strokeWidth: 0.5,
      strokeDasharray: [], 
    },
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={fundo} resizeMode="cover" style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image source={voltar} style={styles.backIcon} />
          </TouchableOpacity>
          <Image source={logo} style={styles.logoHeader} />
          <Text style={styles.logoText}>BLUVA</Text>
        </View>

        {/* Container */}
        <View style={styles.chartContainerBox}>
          <Text style={styles.title}>CONSUMO DE AGUA</Text>

          <BarChart
            data={data}
            width={screenWidth - 60}
            height={400}
            fromZero
            yAxisSuffix=" L"
            chartConfig={chartConfig}
            style={{
              marginTop: 10,
              borderRadius: 10,
            }}
            showValuesOnTopOfBars={false}
            withInnerLines={true}
            segments={5}      // 0,100,200,300,400,500
            maxValue={500}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
