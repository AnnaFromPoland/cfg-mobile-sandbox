import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Memes() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>4 Best Procrastination Memes</Text>
        <Image style={styles.image} source={require('../assets/images/phd071307s.gif')} />
        <Image style={styles.image} source={require('../assets/images/phd073010s.gif')} />
        <Image style={styles.image} source={require('../assets/images/phd092910s.gif')} />
        <Image style={styles.image} source={require('../assets/images/sarah_anderson.jpg')} />
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 50,
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
  image: {
    flex: 1,
    width: '100%',
    aspectratio: 1,
    resizeMode: 'contain'
  }
});