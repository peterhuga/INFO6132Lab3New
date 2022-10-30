import React, { useState } from 'react';
import {
  auth, 
  signOut
} from "../firebase-config";
import { 
  Text, 
  View, 
  StyleSheet,  
  Button,
 } from "react-native";
import BonsaiScreen from './BonsaiScreen';

const Dashboard = ({ navigation }) => {

  const [uid, setUid] = useState(auth.currentUser.uid);
  const [displayName, setDisplayName] = useState(auth.currentUser.displayName);

  const logOut = () => {
    signOut(auth)
    .then(()=>{
      navigation.navigate('Login');
    })
    .catch((error)=>console.error(error));
  }

  return (
    <View style={styles.container}>
      <BonsaiScreen/>
      <Button
        color="#3740FE"
        title="Logout"
        onPress={() => logOut()}
      />
    </View>
  );
 }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      //padding: 35,
      backgroundColor: '#fff'
    },
    textStyle: {
      fontSize: 15,
      marginBottom: 20
    }
  });

 export default Dashboard;