import React from 'react';
import { View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { styles } from './appStyles';
import { selectName, setName } from './slices/userSlice';
import Navbar from './src/components/Navbar/Navbar';
import { store } from './store';

const App = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();
  dispatch(setName({
    name: 'juan',
  }));

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navbar />
      </View>
    </Provider>
  );
};

export default App;
