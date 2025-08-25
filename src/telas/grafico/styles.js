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
    width: 30,
    height: 30,
    marginRight: 10,
  },
  logoText: {
    color: '#0C1792',
    fontSize: 34,
    fontWeight: 'bold',
  },
  chartContainerBox: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    width: 300,
    height: 460,
    padding: 30,
    borderRadius: 20,
    marginTop: 90,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: 'bold',
  },
});

export default styles;
