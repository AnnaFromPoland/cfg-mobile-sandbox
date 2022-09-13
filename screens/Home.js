import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Text style={styles.subtitle}>Sandbox Playground</Text>
      <Text style={styles.text}>Welcome to my little sandbox playground! It's just a place for testing new features in practice.</Text>
      <Button title="OK!" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 22,
    lineHeight: 26,
    fontStyle: 'italic'
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
  }
});