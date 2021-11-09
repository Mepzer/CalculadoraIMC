import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function executarCalculos(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    alert("Seu IMC é: " + imc.toFixed(2));
  }

  return(
    <View style={estilo.container} backgroundColor="#2c2f33">
      <Text style={estilo.title}>Calcule seu IMC
      </Text>
      <TextInput 
        style={estilo.input}
        value={peso}  // valor de dentro do componente
        onChangeText={(peso)=>setPeso(peso)} //toda vez que o campo mudar a função é chamada
        placeholder="Peso (kg)" 
        keyboardType="numeric"     
        backgroundColor="#Ffffff"
      />
      <TextInput 
        style={estilo.input}
        value={altura}  // valor de dentro do componente
        onChangeText={(altura)=>setAltura(altura)} //toda vez que o campo mudar a função é chamada
        placeholder="Altura (cm)" 
        keyboardType="numeric" 
        backgroundColor="#ffffff"    
      />
      <TouchableOpacity style={estilo.botao} onPress={executarCalculos}>
        <Text style={estilo.textoBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1
  },
  title:{
    textAlign:'center',
    marginTop:25,
    fontSize:30,
    color:"#7289da"
  },
  input:{
    backgroundColor:'#DDD',
    borderRadius:10,
    margin:15,
    padding:10,
    color:'#000',
    fontSize:23
  },
  botao:{
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    backgroundColor:'#7289da',
    padding:10,
  },
  textoBotao:{
    color:'#fff',
    fontSize:25,
  }
});