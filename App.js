/* @flow strict-local 
*/
import React, {useState, useEffect} from 'react';

import { 
SafeAreaView, 
StyleSheet, 
View, 
Text, StatusBar,
} from 'react-native'; 

import colors from './src/utils/color';
import Form from './components/Form';
import Footer from './components/Footer';
import Result from './components/Results';

export default function App(){ 

  const [nombre,setNombre]=useState(null);
  const [salario,setSalario]=useState(null);
  const [total, setTotal] = useState(null); 

const [errorMessage, setErrorMessage] = useState(''); 
useEffect(() => { 
if (nombre && salario) calculate(); 
else reset(); 
}, [nombre, salario]); 
const calculate = () => { 
reset();

const iss = (salario*0.03).toFixed(2); 
const af = (salario*0.04).toFixed(2);
const ren = (salario*0.05).toFixed(2);

setTotal({ 
isss: iss,
afp: af, 
renta: ren,
totalPayable: (salario-iss-af-ren).toFixed(2).replace('.', ','), 
}); 

}; 
const reset = () => { 
setErrorMessage(''); 
setTotal(null); 
}; 
return ( 
<> 
<StatusBar barStyle="light-content" /> 
<SafeAreaView style={styles.safeArea}> 
<View style={styles.background} /> 
<Text style={styles.titleApp}>Salario neto de empleados</Text> 
<Form 
setNombre={setNombre} 
setSalario={setSalario} 
/> 
</SafeAreaView> 

<Result 
nombre={nombre} 
salario={salario} 
total={total} 
errorMessage={errorMessage} 
/>

<Footer/> 
</> 
); 
}

const styles = StyleSheet.create({ 
safeArea: { 
height: 290, 
alignItems: 'center', 

}, 
background: { 
backgroundColor: colors.PRIMARY_COLOR, 
height: 200, 
width: '100%', 
borderBottomLeftRadius: 30, 
borderBottomRightRadius: 30, 
position: 'absolute', 
zIndex: -1, 
}, 
titleApp: { 
fontSize: 25, 
fontWeight: 'bold', 
color: '#fff', 
marginTop: 50, 
}, 
});



