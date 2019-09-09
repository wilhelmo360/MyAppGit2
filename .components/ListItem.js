import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const getThumbnail = (url) => {
  console.log('urli', url);
  const [thumbnails, setThumbnails] = useState({});
  async function fetchUrl() {
    console.log('fetsurl');
    const response = await fetch('http://media.mw.metropolia.fi/wbma/media/' + url);
    const json = await response.json();
    console.log('json', json);
    setThumbnails(json.thumbnails);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return thumbnails;
};

const ListItem = (props) => {
  const tn = getThumbnail(props.singleMedia.file_id);
  console.log('thumbnails', tn);
  return (
<<<<<<< Updated upstream:.components/ListItem.js
    <TouchableOpacity style={styles.row}>
      <View style={styles.imagebox}>
=======
    <TouchableOpacity
      onPress={
        () => {
          console.log('klik');
          navigation.push('Single', {file: singleMedia});
        }
      }
    >
      <View>
>>>>>>> Stashed changes:components/ListItem.js
        {tn && <Image
          source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}}
        />}
      </View>
<<<<<<< Updated upstream:.components/ListItem.js
      <View style={styles.textbox}>
        <Text style={styles.listTitle}> {props.singleMedia.title} </Text>
        <Text> {props.singleMedia.description} </Text>
=======
      <View>
        <Text>{singleMedia.title} </Text>
        <Text> {singleMedia.description} </Text>
>>>>>>> Stashed changes:components/ListItem.js
      </View>
    </TouchableOpacity>
  );
};


ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
