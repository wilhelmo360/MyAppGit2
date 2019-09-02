/* eslint-disable max-len */
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {MediaProvider} from './.components/contexts/MediaContext';
import List from './.components/List';


const App = () => {
  return (
    <MediaProvider>
      <View style={styles.container}>
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
});

export default App;
