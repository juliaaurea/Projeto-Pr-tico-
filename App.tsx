import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  function transformar(tipo: string) {
    if (tipo === 'maiusculo') {
      setResultado(texto.toUpperCase());
    } else if (tipo === 'minusculo') {
      setResultado(texto.toLowerCase());
    } else if (tipo === 'inverter') {
      setResultado(texto.split('').reverse().join(''));
    } else if (tipo === 'contar') {
      const letras = texto.replace(/\s/g, '').length;
      setResultado(`Total de letras: ${letras}`);
    }
  }

  const contarLetras = texto.replace(/\s/g, '').length;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Transformador de Texto</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu texto aqui"
        value={texto}
        onChangeText={setTexto}
      />

      <View style={styles.botoes}>
        <Button title="Maiúsculo" onPress={() => transformar('maiusculo')} />
        <Button title="Minúsculo" onPress={() => transformar('minusculo')} />
        <Button title="Inverter" onPress={() => transformar('inverter')} />
        <Button title="Contar Letras" onPress={() => transformar('contar')} />
      </View>

      <Text style={styles.resultado}>Resultado: {resultado}</Text>
      <Text style={styles.contador}>Letras digitadas: {contarLetras}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  botoes: {
    gap: 10,
    marginBottom: 20,
  },
  resultado: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  contador: {
    fontSize: 14,
    textAlign: 'right',
    color: '#555',
  },
});
