import React from 'react'; 
import {StyleSheet, Text, View} from 'react-native'; 

export default function Result(props) { 
const {nombre, salario, total, errorMessage} = props; 
return ( 
<View style={styles.content}> 
{total && (


<View style={styles.boxResult}> 
<Text style={styles.title}>Información empleado</Text> 
<DataResult title="Nombre empleado:" value={`${nombre}`} /> 
<DataResult title="Salario base:" value={`${salario} €`} /> 
<DataResult title="Descuento ISSS:" value={`${total.isss} €`} /> 
<DataResult title="Descuento AFP:" value={`${total.afp} €`} /> 
<DataResult title="Descuento Renta:" value={`${total.renta} €`} /> 

<DataResult 
title="Salario neto:" 
value={`${total.totalPayable} €`} 
/> 
</View> 
)} 
<View> 
<Text style={styles.error}>{errorMessage}</Text> 
</View> 
</View> 
); 
}

function DataResult(props) { 
const {title, value} = props; 
 
return ( 
<View style={styles.value}> 
<Text>{title}</Text> 
<Text>{value}</Text> 
</View> 
); 
} 
 
const styles = StyleSheet.create({ 

content: { 
marginHorizontal: 40, 

}, 
boxResult: { 
padding: 30, 

}, 
title: { 
fontSize: 25, 
textAlign: 'center', 
fontWeight: 'bold', 
marginTop:20,
marginBottom: 20, 
}, 
value: { 
flexDirection: 'row',

justifyContent: 'space-between', 
marginBottom: 20, 

}, 
error: { 
textAlign: 'center', 
color: '#f00', 
fontWeight: 'bold', 
fontSize: 20, 
}, 
});
