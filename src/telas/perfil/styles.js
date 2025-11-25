import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // BACKGROUND
  background: {
    width: '100%',
    height: '100%',
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
    paddingVertical: 10,   
    zIndex: 10,
  },

  logo: {
    height: 170,         
    width: 170,
    marginRight: 10,
    resizeMode: 'contain',
  },

  backButton: {
    position: 'absolute',
    left: 15,
  },

  backIcon: {
    width: 140,     
    height: 145,
    resizeMode: 'contain',
  },

  headerText: {
    color: '#0C1792',
    fontSize: 80,   
    fontWeight: 'bold',
  },

  // CONTAINER
  todoContainer: {
    paddingTop:350,   
    width: '100%',
    alignItems: 'center',
  },

  container: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    width: '95%',          
    padding: 20,
    borderRadius: 15,
    marginTop: 120,
  },

  title: {
    marginBottom: 20,
    fontSize: 100,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // PERFIL INFO
  cccontainer: {
    backgroundColor: '#b3d7ff',
    width: '100%',       
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoSection: {
    width: '58%',
  },

  perfilInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 90,
  },

  perfilFoto: {
    width: 290,
    height: 290,
    borderRadius: 30,
    marginRight: 100,
    marginBottom:45,
    marginTop:30,
    marginLeft:30,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 35,
    fontSize:65,
    marginTop: 50,
  },

  inputInfo: {
    marginBottom: 35,
  },

  input: {
    padding: 30,
    marginBottom: 45,
    marginTop:25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 60,
    width: '100%',
    backgroundColor: '#fff',
  },

  inputS: {
    padding: 20,
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 50,
    width: '100%',
    backgroundColor: '#fff',
  },

  // BOTÕES
  buttonSection: {
    width: '38%',
    alignItems: 'center',
    marginTop:320,
    
  },

  button: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    borderRadius: 20,
    marginTop: 200,
    alignItems: 'center',
  },


  buttonText: {
    fontWeight: 'bold',
    fontSize: 60,
    color: '#000',
  },
});
