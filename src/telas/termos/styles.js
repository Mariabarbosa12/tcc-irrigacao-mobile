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
    resizeMode: 'contain',
  },
  logoText: {
    color: '#111d9eff',
    fontSize: 80,
    fontWeight: 'bold',
  },
  containerBox: {
    backgroundColor: 'rgba(255,255,255,0.78)',
      width: '95%',
    height:'82%',
    padding: 20,
    borderRadius: 20,
    marginTop: 50,
    alignItems: 'center',
    

  },
  title: {
    fontSize: 90,
    marginBottom: 12,
    fontWeight: 'bold',
  },
    txt: {
    fontSize: 60,
    marginTop: 0, // removido
  },

  txtDois: {
    fontSize: 60,
    marginTop: 0, // removido
  },

  titulo: {
    fontSize: 70,
    marginTop: 10, // reduzido
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  paragrafo: {
    marginTop: 15,  // reduzido
    marginBottom: 10,
    fontSize: 55,
    textAlign: 'left',
    lineHeight: 65,
  },


  scrollArea: {
  width: '100%',
  height: '95%',  
  marginTop: 10,
},
  
});

export default styles;
