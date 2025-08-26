import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // BACKGROUND
  background: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  backButton: {
    position: 'absolute',
    left: 15,
  },
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
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
  container: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    width: 270,
    height: 320,
    padding: 30,
    borderRadius: 20,
    marginTop: 120,

    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },

  // CONTATO
  contato: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    paddingVertical: 10,
  },
  contatoIcon: {
    width: 45,
    height: 45,
    marginRight: 15,
    borderRadius: 25,
  },
  apelido: {
    fontSize: 16,
    color: '#333',
  },
});
