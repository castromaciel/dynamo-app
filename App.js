import { View, Text } from 'react-native';
import { styles } from './appStyles';
import { Login }  from './screens/login';


const App = () => {
  return ( 
    <Login />
    // <View style={styles.container}>
    //   <Text>Dynamo App</Text>
    // </View>
  );
}

export default App;
