
import { StyleSheet, Text, View } from 'react-native';
import Logginp2 from './src/components/screen/Login/Logginp2';
import Navegation2 from './src/components/Navegation2';
import Navegation from './src/components/Navegation';
import { enableScreens } from 'react-native-screens';
enableScreens();



export default function App() {
  return (
    <>
<Navegation2/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   textAlign:"center",
    backgroundColor: "#CDCDCD",
  
  },
});
