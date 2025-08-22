import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cadastroContainer: {
    backgroundColor: 'rgba(173, 216, 230, 0.9)',
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: 320,
    height: 510,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  imgUsu: {
    width: 90,
    height: 90,
    marginBottom: 5,
    marginTop: 5,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 270,
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  cadastroBtn: {
    width: '50%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  cadastroBtnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styles;
