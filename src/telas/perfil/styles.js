import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // BACKGROUND
  background: {
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
    height: '7%',         
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
  backButton: {
    position: 'absolute',
    left: 15,
  },
  backIcon: {
    width: 40,
    height: 45,
    resizeMode: 'contain',
  },

  headerText: {
    color: '#0C1792',
    fontSize: 30,
    fontWeight: 'bold',
  },

  // CONTAINER
  todoContainer: {
    paddingTop: 200,
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    width: '110%',
    height: '130%',
    padding: 30,
    borderRadius: 15,
    marginTop: 10,
  },
  title: {
    marginBottom: 20,
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // PERFIL INFO
  cccontainer: {
    backgroundColor: '#b3d7ff',
     width: '130%',
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoSection: {
    width: '60%',
  },
  perfilInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  perfilFoto: {
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    width:100,
  },
  inputInfo: {
    marginBottom: 15,
  },
  input: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
    width: '100%',
    backgroundColor: '#fff',
    height:28,
  },
    inputS: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
    width: '76%',
    height:20,
    backgroundColor: '#fff',
  },

  // BOTÕES
  buttonSection: {
    width: '35%',
    alignItems: 'center',
    marginTop: 38,
  },
  button: {
    backgroundColor: '#fff',
    padding: 5,
    width: '108%',
    borderRadius: 7,
    marginTop: 35,
    alignItems: 'center',
  },
   buttonS: {
    backgroundColor: '#e98a7fff',
    
    padding: 5,
    width: '108%',
    borderRadius:7,
    marginTop: 35,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 8,
    color: '#000',
  },
});
