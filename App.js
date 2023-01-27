import React from "react";
import {View,Text,StyleSheet,Image, TextInput, Button} from "react-native";

const login=()=>{

  return(
<View style={{flex:1}}>
  <View style={styles.firstsection}>

     <Image source={require("./assets/images/oreact.png")} style={{width:170,height:170}} />
  
  </View>
  <View style={styles.secondsection}><Text style={{color:"#BEBEBE"}}>Wellcome to my first Application</Text></View>
    <View style={{flex:5,alignItems:"center"}}>
      
      <View style={{marginTop:20}}>
<Text>ایمیل خود را وارد کنید:</Text>
  <TextInput placeholder=" Email Address" textContentType="emailAddress" keyboardType="email-address" style={styles.shadow}></TextInput>
  </View>
<View  style={{marginTop:20}}>
<Text>پسوورد خود را وارد کنید:</Text>
  <TextInput secureTextEntry placeholder=" Password" textContentType="password" keyboardType="decimal-pad" style={styles.shadow}></TextInput>
  </View>
  <View style={{width:300,marginTop:50}}>
    <Button
  onPress={()=>alert("clicked")}
  title="Log In"
  color="#BEBEBE"
  accessibilityLabel="Log in"


  />
  </View>
  </View >

</View>
  )
}
const styles=StyleSheet.create({
firstsection:{
  backgroundColor:"#EBECF0",flex:4 ,justifyContent:"center",alignItems:"center"
},
secondsection:{
  alignItems:"center",
  marginTop:10,
  marginBottom:20
  
},
shadow:{
  justifyContent:"center",alignItems:"center",
 marginTop:5,
  width:300,
  height:30,
  backgroundColor:"white",
  shadowColor:"#000",
  shadowOffset:{
    width:0,
    height:2
  },
  shadowOpacity:0.25,
  shadowRadius:3.84,
  elevation:15
   },
})
export default login;