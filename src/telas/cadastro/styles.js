import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
 width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cadastroContainer: {
       backgroundColor: 'rgba(173, 216, 230, 0.9)',
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
    height: '67%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  imgUsu: {
     width: 305,
    height: 305,
    marginBottom: '2%',
    marginTop: 1,
    resizeMode: 'contain',
  },
  title: {
     fontSize:180,
    color: '#fff',
    marginBottom: '8%',
    fontWeight: 'bold',
  },
  input: {
    width: '95%',
    padding: '3%',
    marginBottom: '8%',
    borderRadius: 15,
    borderWidth: 0,
    fontSize: 100,
    backgroundColor: '#fff',
  },
  cadastroBtn: {
    width: '42%',
    height: '8%',
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%',
  },
  cadastroBtnText: {
    fontSize:105,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styles;
