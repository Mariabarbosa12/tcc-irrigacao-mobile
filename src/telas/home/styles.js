import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  // HEADER
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  logo: {
    height: 40,
    width: 40,
    marginRight: 10,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111d9eff',
  },

  // CONTAINER PRINCIPAL
  contentBox: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    width: 300,
    height: 370,
    borderRadius: 20,
    marginTop: 125,
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
    width: '48%',
    height: 130,
    padding: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#0C1792',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardImg: {
    width: 45,
    height: 45,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  cardValue: {
    fontSize: 17,
    color: '#0C1792',
    fontWeight: 'bold',
  },

  // BOTÕES
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop:80,
  },
  iconButton: {
    backgroundColor: '#e0f0ff',
    borderRadius: 10,
    width: 52,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  iconImg: {
    width: 38,
    height: 38,
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
