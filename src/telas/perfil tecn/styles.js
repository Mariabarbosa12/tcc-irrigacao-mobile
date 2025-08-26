import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // BACKGROUND
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
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
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    height: 30,
    width: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
  headerText: {
    color: '#0C1792',
    fontSize: 34,
    fontWeight: 'bold',
  },

  // CONTAINER
  scrollContainer: {
    paddingTop: 70,
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    width: '90%',
    maxWidth: 840,
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
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  infoSection: {
    width: '48%',
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
  },
  inputInfo: {
    marginBottom: 15,
  },
  input: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
    width: '100%',
    backgroundColor: '#fff',
    height: 28,
  },
  inputS: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 14,
    width: '70%',
    height: 28,
    backgroundColor: '#fff',
  },

  // BOTÕES
  buttonSection: {
    width: '48%',
    alignItems: 'center',
    marginTop: 79,
  },
  button: {
    backgroundColor: '#fff',
    padding: 6,
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonS: {
    backgroundColor: '#e98a7fff',
    padding: 6,
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  greenButton: {
    backgroundColor: '#8ece90ff',
    padding: 6,
    width: '100%',
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 10,
    color: '#000',
  },
});
