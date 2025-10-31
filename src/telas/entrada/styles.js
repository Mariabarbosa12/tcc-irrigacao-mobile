import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  // .container {
  //   background-color: rgba(255, 255, 255, 0.78);
  //   width: 350px;
  //   height:300px;
  //   padding: 30px;
  //   border-radius: 10px;
  //   margin-top: 180px;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  // }

  // h1 {
  //   font-family: 'Poppins', sans-serif;
  //   font-size: 32px;
  //   color: black;
  //   margin-top: 28px;
  //   margin-bottom: 30px;
  // }

  // .icon-button {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   margin-bottom: 30px;
  // }

  // select {
  //   width: 100%;
  //   padding: 12px;
  //   font-size: 16px;
  //   border-radius: 8px;
  //   border: 1px solid #ccc;
  //   margin-bottom: 20px;
  //   background-color: #fff;
  //   opacity: 100%;
  //   margin-top: 10px;
  // }

  // button {
  //   width: 100%;
  //   padding: 12px;
  //   font-size: 16px;
  //   background-color: #5a5b65;
  //   color: white;
  //   border: none;
  //   border-radius: 8px;
  //   cursor: pointer;
  //   transition: 0.3s;
  // }

  // button:hover {
  //   background-color: #4a4b55;
  // }
  // -----
  // background: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // container: {
  //   backgroundColor: 'rgba(255, 255, 255, 0.78)',
  //   width: 320,
  //   height: 400,
  //   padding: 30,
  //   borderRadius: 10,
  //   alignItems: 'center',
  // },
  containerLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:8,
    // marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.78)',
    width: '78%',
    height: '38%',
    // marginTop: 140,
    borderRadius: 15,
    // marginLeft: 45,
  },
  containerLg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 20,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height:125,
    width: 125,
    marginTop: 1,
    marginRight: 20,
    resizeMode: 'stretch',
  },
  txtLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  txt: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 40,
    color: 'rgba(61, 58, 58, 1)',
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: '600',
  //   color: '#000',
  //   fontFamily: 'Poppins',
  // },
  containerTxt: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 30,
    marginTop: 10,

  },

  button: {
     width: '48%',
    height: '32%',
    backgroundColor: '#4a4b55',
    padding: 12,
    borderRadius: 5,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  // buttonPressed: {
  //   backgroundColor: '#4a4b55',
  // },
  buttonText: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
  },
  // buttonTextPressed: {
  //   color: '#e0e0e0',
  // },
});

export default styles;
