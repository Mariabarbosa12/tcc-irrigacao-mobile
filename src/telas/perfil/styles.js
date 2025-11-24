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
    paddingVertical: 10,   // <-- para dar altura sem exagero
    zIndex: 10,
  },

  logo: {
    height: 170,          // <-- tamanho mobile adequado
    width: 170,
    marginRight: 10,
    resizeMode: 'contain',
  },

  backButton: {
    position: 'absolute',
    left: 15,
  },

  backIcon: {
    width: 140,     // <-- ajustado
    height: 145,
    resizeMode: 'contain',
  },

  headerText: {
    color: '#0C1792',
    fontSize: 80,   // <-- ideal pra mobile
    fontWeight: 'bold',
  },

  // CONTAINER
  todoContainer: {
    paddingTop: 120,   // <-- posição após header
    width: '120%',
    alignItems: 'center',
  },

  container: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    width: '90%',          // <-- ajustado
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
    width: '100%',       // <-- corrigido
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 5,
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
  },

  // BOTÕES
  buttonSection: {
    width: '35%',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#fff',
    padding: 10,
    width: '100%',
    borderRadius: 7,
    marginTop: 15,
    alignItems: 'center',
  },

  buttonS: {
    backgroundColor: '#e98a7f',
    padding: 10,
    width: '100%',
    borderRadius: 7,
    marginTop: 15,
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000',
  },
});
