import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import List from './components/List';
import {MediaProvider} from './components/contexts/MediaContext';

const App = () => {
  return (
    <MediaProvider>
      <View style={styles.container}>
        <Text style={styles.header}>{'CATS'}</Text>
        <List />
      </View>
    </MediaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingTop: 15,
    paddingLeft: 15,
  },
});
export default App;
