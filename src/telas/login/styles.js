import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'rgba(173, 216, 230, 0.9)',
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
    height: '58%',
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
    marginBottom: '10%',
    fontWeight: 'bold',
  },
  input: {
    width: '95%',
    padding: '2%',
    marginBottom: '8%',
    borderRadius: 15,
    borderWidth: 0,
    fontSize: 100,
    backgroundColor: '#fff',
  },
  loginBtn: {
    width: '30%',
    height: '8%',
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%',
  },
  loginBtnText: {
    fontSize: 105,
    fontWeight: 'bold',
    color: '#333',
  },
  txt: {
    marginTop: '8%',
    fontSize: 90,
    color: '#fff',
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default styles;
