import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    width: 320,
    height: 400,
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  iconButton: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Poppins',
  },
  pickerWrapper: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  select: {
    width: '100%',
    height: 50,
  },
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: '#5a5b65',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#4a4b55',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonTextPressed: {
    color: '#e0e0e0',
  },
});

export default styles;
