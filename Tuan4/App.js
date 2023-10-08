import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import A from './screens/A';
import B from './screens/B';
import C from './screens/C';
import Tiki from './screens/Tiki';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <TongHaiSo /> */}
      {/* <A /> */}
      {/* <B /> */}
      {/* <C /> */}
      <Tiki />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
