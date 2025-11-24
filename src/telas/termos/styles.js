import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  backButton: {
    position: 'absolute',
    left: 15,
  },
  backIcon: {
    width: 140,
    height: 145,
    resizeMode: 'contain',
  },
  logoHeader: {
    width: 170,
    height: 170,
    marginRight: 10,
  },
  logoText: {
    color: '#111d9eff',
    fontSize: 80,
    fontWeight: 'bold',
  },
  chartContainerBox: {
    backgroundColor: 'rgba(255,255,255,0.78)',
      width: '95%',
    height: '58%',
    padding: 20,
    borderRadius: 20,
    marginTop: 50,
    alignItems: 'center',
    marginLeft:15,

  },
  title: {
    fontSize: 28,
    marginBottom: 12,
    fontWeight: 'bold',
  },
});

export default styles;
