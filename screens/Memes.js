import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Memes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>4 Best Procrastination Memes</Text>
      <Image source={require('./assets/images/phd071307s.gif')} />
      <Image source={require('./assets/images/phd073010s.gif')} />
      <Image source={require('./assets/images/phd092910s.gif')} />
      <Image source={require('./assets/images/sarah_anderson.jpg')} />
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