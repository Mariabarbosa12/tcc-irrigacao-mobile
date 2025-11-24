import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

import logo from '../../../assets/logo.png';
import fundo from '../../../assets/fundomobile.png';
import voltar from '../../../assets/voltar.png';

import styles from './styles';

export default function Termos({ navigation }) {
 

  return (
    
      <ImageBackground source={fundo} resizeMode="stretch" style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() =>  navigation.navigate("Home")}
          >
            <Image source={voltar} style={styles.backIcon} />
          </TouchableOpacity>
          <Image source={logo} style={styles.logoHeader} />
          <Text style={styles.logoText}>BLUVA</Text>
        </View>

        {/* Container */}
        <View style={styles.containerBox}>

          <Text style={styles.title}>Termos de uso e Política de privacidade</Text>

          <View style={styles.scrollArea}>

          <ScrollView  style={{ width: "100%" }} 
            contentContainerStyle={{ paddingBottom: 60, flexGrow: 1 }}
            showsVerticalScrollIndicator={true} > 
           
            <Text style={styles.titulo}>1. Termos</Text>

            <Text style={styles.paragrafo}>
              Ao acessar ao site IRRIGAÇÃO AUTOMATIZADA: Desenvolvimento de um Sistema Web e Mobile Integrado ao ESP32 para Monitoramento de Cultivos Agrícolas., concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
              Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </Text>

            <Text style={styles.titulo}>2. Uso de Licença</Text>

            <Text style={styles.paragrafo}>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site IRRIGAÇÃO AUTOMATIZADA: Desenvolvimento de um Sistema Web e Mobile Integrado ao ESP32 para Monitoramento de Cultivos Agrícolas., apenas para visualização transitória pessoal e não comercial.
              Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
              - modificar ou copiar os materiais;
              - usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);
              - tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;
              - remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;
              - ou transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.
              Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida a qualquer momento.
              Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
            </Text>

            <Text style={styles.titulo}>3. Isenção de responsabilidade</Text>

            <Text style={styles.paragrafo}>
              Os materiais no site são fornecidos 'como estão'.
              Não oferecemos garantias, expressas ou implícitas, e, por este meio, negamos todas as outras garantias, incluindo, sem limitação, garantias implícitas de comercialização, adequação a um fim específico ou não violação de propriedade intelectual.
              Além disso, não garantimos a precisão, resultados prováveis ou confiabilidade do uso dos materiais.
            </Text>

            <Text style={styles.titulo}>4. Limitações</Text>

            <Text style={styles.paragrafo}>
              Em nenhum caso seremos responsáveis por quaisquer danos (incluindo, sem limitação, perda de dados, lucros ou interrupção de negócios), mesmo que tenhamos sido avisados da possibilidade de tais danos.
            </Text>

            <Text style={styles.titulo}>5. Precisão dos materiais</Text>

            <Text style={styles.paragrafo}>
              Os materiais exibidos podem incluir erros técnicos, tipográficos ou fotográficos.
              Podemos fazer alterações nos materiais a qualquer momento, sem aviso prévio.
            </Text>

            <Text style={styles.titulo}>6. Links</Text>

            <Text style={styles.paragrafo}>
              Não analisamos todos os sites vinculados e não somos responsáveis por seu conteúdo.
              O uso de sites vinculados é por conta e risco do usuário.
            </Text>

            {/* PRIVACIDADE */}
            <Text style={styles.titulo}>2. Privacidade</Text>

            <Text style={styles.paragrafo}>
              A sua privacidade é importante para nós. É política do IRRIGAÇÃO AUTOMATIZADA respeitar a sua privacidade em relação 
              a qualquer informação sua que possamos coletar no site.
            </Text>

            <Text style={styles.paragrafo}>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço.
              Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
            </Text>

            <Text style={styles.paragrafo}>
              Apenas retemos as informações pelo tempo necessário para fornecer o serviço solicitado, protegendo esses dados de perda, roubo ou acesso não autorizado.
            </Text>

            <Text style={styles.paragrafo}>
              Nosso site pode ter links para sites externos que não são operados por nós. Não temos controle sobre seu conteúdo.
            </Text>

            <Text style={styles.paragrafo}>
              Você é livre para recusar fornecer informações pessoais, entendendo que talvez alguns serviços não possam ser oferecidos.
            </Text>

            <Text style={styles.paragrafo}>
              O uso continuado do site será considerado aceitação de nossas práticas.
            </Text>

            <Text style={styles.paragrafo}>
              O serviço Google AdSense usa o cookie DoubleClick para anúncios relevantes.
            </Text>

            <Text style={styles.paragrafo}>
              Utilizamos anúncios para compensar custos de operação. Cookies comportamentais servem para exibir anúncios mais relevantes.
            </Text>

            <Text style={styles.paragrafo}>
              Parceiros afiliados podem usar cookies de rastreamento para validar vendas.
            </Text>

            <Text style={styles.titulo}>2.1 Compromisso do Usuário</Text>

            <Text style={styles.paragrafo}>
              O usuário se compromete a:
              A) Não se envolver em atividades ilegais ou contrárias à boa fé;
              B) Não difundir propaganda racista, xenofóbica, pornografia ilegal, apologia ao terrorismo ou contra direitos humanos;
              C) Não causar danos a sistemas físicos ou lógicos, nem espalhar vírus ou software malicioso.
            </Text>

            <Text style={styles.titulo}>2.2 Mais informações</Text>

            <Text style={styles.paragrafo}>
              Esta política é efetiva a partir de 17 November 2025 18:07.
            </Text>



             </ScrollView>
             </View>
        </View>
      </ImageBackground>
    
  );
}
