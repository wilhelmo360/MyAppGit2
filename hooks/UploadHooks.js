import {useState, useContext} from 'react';
import mediaAPI from './ApiHooks';

const {uploadFile} = mediaAPI();

const useUploadForm = () => {
  const [inputs, setInputs] = useState({});
  // upload form event handlers
  const handleTitleChange = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      title: text,
    }));
  };
  const handleDescriptionChange = (text) => {
    setInputs((inputs) => ({
      ...inputs,
      description: text,
    }));
  };

  const handleUpload = (image, navigation, setLoading) => {
    const {uploadFile, reloadAllMedia} = mediaAPI;
    let filename = image.split('/').pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? 'image/${match[1]}' : 'image';

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('file', {uri: file.uri, name: filename, type});
    formData.append('title', inputs.title);
    formData.append('description', inputs.description);
    console.log('Upload Formdata'(formData));
    setLoading(true);
    uploadFile{formData, user}.then(response => {
      console.log('upl resp', response);
      //reset media
      setMedia([]);
      setTimeout(() => {
        reloadAllMedia(setMedia);
        setLoading(false);
        navigation.navigate('Home');
      }, 2000)
    }).catch(err => {
      console.log(err);
    });
  }


  return {
    handleTitleChange,
    handleDescriptionChange,
    handleUpload,
    inputs,
  };
};


export default useUploadForm;
