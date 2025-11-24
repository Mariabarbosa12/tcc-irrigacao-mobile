import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
  
   width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Header
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
  backButton: {
    position: 'absolute',
    left: 15,
  },
  backIcon: {
    width: 140,
    height: 145,
    resizeMode: 'contain',
  },

  headerTitle: {
    color: '#111d9eff',
    fontSize: 80,
    fontWeight: 'bold',
  },

  // Caixa do chat
  chatBox: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    width: '100%',
    height: '130%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 15,
    padding: 15,
  },
  chatHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },

  mensagensChat: {
    flex: 1,
  },
  msgEsquerda: {
    alignSelf: 'flex-start',
    backgroundColor: '#b3d7ff',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: '75%',
  },
  msgDireita: {
    alignSelf: 'flex-end',
    backgroundColor: '#91cba3',
    padding: 10,
    borderRadius: 20,
    marginVertical: 5,
    maxWidth: '75%',
  },

  // Entrada
  entradaChat: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 20,
    backgroundColor: '#b3d7ff',
    fontSize: 16,
    fontStyle: 'italic',
  },
  sendButton: {
    backgroundColor: '#b3d7ff',
    borderRadius: 50,
    width: 50,
    height: 50,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIcon: {
    width: 25,
    height: 25,
  },
});

export default styles;