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
    borderRadius: 15,
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
    width: 138,
    height: 138,
    marginBottom: '5%',
    marginTop: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize:52,
    color: '#fff',
    marginBottom: '10%',
    fontWeight: 'bold',
  },
  input: {
    width: '95%',
    padding: '3%',
    marginBottom: '8%',
    borderRadius: 8,
    borderWidth: 0,
    fontSize: 25,
    backgroundColor: '#fff',
  },
  loginBtn: {
    width: '30%',
    height: '8%',
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '6%',
  },
  loginBtnText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  txt: {
    marginTop: '8%',
    fontSize: 25,
    color: '#fff',
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default styles;
