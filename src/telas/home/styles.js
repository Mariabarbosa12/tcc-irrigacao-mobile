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
        
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    zIndex: 10,
  },
  logo: {
    height: 170,
    width: 170,
    marginRight: 10,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#111d9eff',
  },

  // CONTAINER PRINCIPAL
  contentBox: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    width: '92%',
    height: '65%',
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
    borderRadius: 70,
    width: '45%',
    height:'120%',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 120,
    marginTop:150,
  },
  cardTitle: {
    color: '#0C1792',
    fontWeight: 'bold',
    fontSize: 100,
    marginBottom: 50,
  },
  cardImg: {
    width:260,
    height: 260,
    marginVertical: 10,
    resizeMode: 'contain',
  },
  cardValue: {
    fontSize: 100,
    color: '#0C1792',
    fontWeight: 'bold',
    marginTop:40,
  },
  picker: {
    fontSize: 70,
    marginRight:1280,
    backgroundColor: '#d4eaffff',
    color: '#1d236d',
    borderRadius: 20,
  },

  // BOTÕES
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop:'42%',
  },
  iconButton: {
    backgroundColor: '#e0f0ff',
    borderRadius: 70,
    width: '22%',
    height: '210%',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  iconImg: {
    width: 220,
    height: 220,
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
