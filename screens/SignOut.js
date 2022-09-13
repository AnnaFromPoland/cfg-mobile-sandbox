import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button'

export default function SingOut() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Out</Text>
      <Text style={styles.subtitle}>Leaving already?</Text>
      <Text style={styles.text}>Some sayonara content should go here. Did you know there's a Jeff Goldblum Lorem Ipsum Generator? Click below to see Jeffsum with your own eyes!</Text>
      <Text style={styles.subtitle}>Have a nice trip~~!</Text>
      <Button title="Take me to Jeff'sum" href="https://jeffsum.com" target="_blank" />
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