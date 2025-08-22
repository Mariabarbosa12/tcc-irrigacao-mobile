import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1, 
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
    padding: 5, 
    marginBottom: 30, 
    backgroundColor: 'rgba(255, 255, 255, 0.78)', 
     width: 270,
      height:300,
      marginTop: 140,
      borderRadius:15,
      marginLeft: 45,
  },
  logo: {
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    marginTop:1,
    marginRight: 20, 
    resizeMode: 'stretch',
  },
  txtLogo: {
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20, 
    fontWeight: 'bold', 
  }, 
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Poppins',
  },
  pickerWrapper: {
    flexDirection: 'row' ,
    borderWidth: 1,
    height: 30,
    width:100,
    borderColor: '#ccc',
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 18,
    alignItems: 'center' ,
  },
  select: {
    width: '100%',
    height: 50,
  },
  button: {
    width: '100%',
    height:100,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
      color: '#fff',
    fontSize: 16,
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
