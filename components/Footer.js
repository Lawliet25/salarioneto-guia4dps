import { RefreshControlBase } from "react-native"; 
import React from 'react'; 
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'; 
import colors from '../src/utils/color';

export default function Footer(props) { 
return ( 
<View style={styles.viewFooter}> 

<Text style={styles.text}> © Copiright, Rodrigo Fernando Valle - 2022</Text> 

</View> 
); 
} 
const styles = StyleSheet.create({ 
viewFooter: { 
position: 'absolute', 
bottom: 0, 
width: '100%', 
backgroundColor: colors.PRIMARY_COLOR, 
color: '#A5A5A5', 
height: 100, 
borderTopLeftRadius: 30, 
borderTopRightRadius: 30, 
alignItems: 'center', 
justifyContent: 'center', 
},
text:{
  color:'white',
  fontStyle:'italic',
}

});

