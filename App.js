import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';
import Title from './src/components/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Teste de IMC </Text>
      <StatusBar style="auto" />
      <Title></Title>           
      <TextInput placeholder='Ex Numeric' keyboardType='numeric'> Digite seu Tamanho </TextInput>
      <TextInput placeholder='Ex Numeric' keyboardType='numeric' > Digite sua Altura </TextInput>
      <Button title='Button'> Red </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
   },
});
