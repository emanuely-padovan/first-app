import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Recados() {
  const [texto, setTexto] = useState('')
  const [recado, setRecado] = useState('')

  // TODO 3 — Crie a função handleEnviar
  // Ela deve:
  //   - Atualizar o recado enviado com o texto atual
  //   - Limpar o campo de texto (setar texto para '')

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📝 Recados</Text>

      {/*
        TODO 4 — Complete o TextInput:
        - Conecte o estado do texto na prop value={}
        - Use onChangeText para atualizar o estado
          a cada letra digitada

        Exemplo de onChangeText:
          onChangeText={texto => setTexto(texto)}
      */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem..."
        value={}
        onChangeText={(texto) => setTexto(texto)}
      />

      <TouchableOpacity style={styles.botao} onPress={() => handleEnviar}>
        <Text style={styles.botaoTexto}>Enviar</Text>
      </TouchableOpacity>

      {/*
        TODO 6 — Exiba o recado enviado APENAS se ele não for vazio
        Dica: use a renderização condicional
          {recadoEnviado !== '' && (...)}
      */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#cc0000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 24,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#cc0000',
  },
  label: {
    fontSize: 12,
    color: '#888888',
    marginBottom: 4,
  },
  recado: {
    fontSize: 18,
    color: '#222222',
  },
});
