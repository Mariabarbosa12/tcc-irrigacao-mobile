import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 15,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  logoHeader: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    color: '#111d9eff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  chartContainerBox: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    width: 330,
    height: 460,
    padding: 20,
    borderRadius: 20,
    marginTop: 90,
    alignItems: 'center',
    marginLeft:15,

  },
  title: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: 'bold',
  },
});

export default styles;
