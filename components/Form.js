import React from 'react'; 
import {StyleSheet, TextInput, View} from 'react-native'; 
import colors from '../src/utils/color'; 


export default function Form(props) { 
const {setNombre, setSalario} = props; 
return ( 
<View style={styles.viewForm}> 
<View style={styles.viewInputs}> 
<TextInput 
placeholder="Nombre del empleado" 
keyboardType="text" 
style={styles.input} 
onChange={(e) => setNombre(e.nativeEvent.text)} 
/> 
<TextInput 
placeholder="Salario base" 
keyboardType="numeric" 
style={[styles.input, styles.inputPercentage]} 
onChange={(e) => setSalario(e.nativeEvent.text)} 
/> 
</View> 
 
</View> 
); 
}

const styles = StyleSheet.create({ 
viewForm: { 
position: 'absolute', 
bottom: -30, 
width: '85%', 
paddingHorizontal: 30, 
backgroundColor: colors.PRIMARY_COLOR_DARK, 
borderRadius: 30, 
height: 180, 
justifyContent: 'center', 
}, 
viewInputs: { 
flexDirection: 'block', 
}, 
input: { 
height: 50, 
backgroundColor: '#fff', 
borderWidth: 1, 
borderColor: colors.PRIMARY_COLOR, 
borderRadius: 5, 
width: '100%', 
marginRight: 5, 
marginLeft: 0, 
marginBottom: 10, 
color: '#A5A5A5', 
paddingHorizontal: 20, 
}, 
inputPercentage: { 
width: '100%', 
marginLeft: 0, 
color: '#A5A5A5'
}, 
}); 
