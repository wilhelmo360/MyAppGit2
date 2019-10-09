/*import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MediaContext} from '../contexts/MediaContext';

var arr=[{image:require('image1')},{image:require('image2')},{image:require('image3')}];

    Class CoolSlider extends component{

    constructor(props)
    {
      super(props);
      this.state = {
        counter:0,
      }
    }

    changeImage(button)
    {
      if(button == 1)
      {
        this.setState({counter: this.state.counter + 1})
      }
      else
      {
        this.setState({counter: this.state.counter - 1})
      }

    }

    render()
    {

      let button1 = false,button2 = false;
     if(this.state.counter == 0)
      {
        //make the previous button disable
         button2=true;
      }

     if(this.state.counter == 2)
     {
         button1=true;
     }

    //     if(arr.length == 1 )
    //    {
    //        button1=true;
    //        button2=true;
    //    }
return (
    <View>
    <Image source = {arr[this.state.counter].image} />
    <TouchableHighlight disabled={button1} onPress = this.changeImage(1)>
    <Text>
      Next
    </Text>
    </TouchableHighlight>

    <TouchableHighlight disabled={button2} onPress = this.changeImage(2)>
    <Text>
      Previous
    </Text>
    </TouchableHighlight>
)
    }
    }




changeImage(button) {
    if(button == 1) {
      //if you reach the end i.e below statement then counter 0
      if (this.state.counter == arr.length - 1) this.setState({counter: 0})
      else this.setState({counter: this.state.counter + 1})
    }
    //similarly if you reach the starting then counter will be at end of the
    array
    else {
      if (this.state.counter == 0) this.setState({counter: arr.length - 1})
      else this.setState({counter: this.state.counter - 1})
    }
  }
