import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'rgba(173, 216, 230, 0.9)',
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: 300,
    height: 390,
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
    marginTop: 1,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    width: 270,
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 0,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  loginBtn: {
    width: '50%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  txt: {
    marginTop: 15,
    fontSize: 14,
    color: '#fff',
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});

export default styles;
