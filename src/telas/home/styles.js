import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // HEADER
  header: {
   position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6%',         // mantém % (ajuste conforme necessário)
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    zIndex: 10,
  },
  logo: {
    height: 78,
    width: 78,
    marginRight: 10,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#111d9eff',
  },

  // CONTAINER PRINCIPAL
  contentBox: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    width: '92%',
    height: '60%',
    borderRadius: 20,
    marginTop: 80,
    alignItems: 'center',
    padding: 30,
  },

  // SENSOR CARDS
  sensorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop:20,
  },
  card: {
    backgroundColor: '#cfe8ff',
    borderRadius: 10,
    width: '45%',
    height:'150%',
    padding: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#0C1792',
    fontWeight: 'bold',
    fontSize: 30,
  },
  cardImg: {
    width:95,
    height: 95,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  cardValue: {
    fontSize: 28,
    color: '#0C1792',
    fontWeight: 'bold',
  },
  picker: {
    fontSize: 25,
    marginRight:180,
    backgroundColor: '#d4eaffff',
    color: '#1d236d',
    borderRadius: 10,
  },

  // BOTÕES
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop:'40%',
  },
  iconButton: {
    backgroundColor: '#e0f0ff',
    borderRadius: 10,
    width: '22%',
    height: '230%',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  iconImg: {
    width: 68,
    height: 66,
    resizeMode: 'contain',
  },
  powerOn: {
    backgroundColor: '#74b686',
  },
  powerOff: {
    backgroundColor: '#dd5a4c',
  },
});

export default styles;
