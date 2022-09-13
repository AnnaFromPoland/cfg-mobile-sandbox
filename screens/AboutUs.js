import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button'

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.subtitle}>Whoever 'Us' Are</Text>
      <Text style={styles.text}>If I'd be an organization, this will be where I'd introduce us. I'm just 1 person though. My name is Anna, I'm hailing from Warsaw, Poland.</Text>
      <Text style={styles.subtitle}>Nice to 'meet' you!</Text>
      <Button title="Nice to meet you too!" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC4C4',
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