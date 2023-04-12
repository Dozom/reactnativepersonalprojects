import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View, Dimensions } from 'react-native';
import { Audio } from "expo-av"

const AppLauncher = () => {
  return (
    <DrumPad>
    </DrumPad>
  );
};

// Component de preview layout
const DrumPad = () => {
  // props
  const [sound, setSound] = useState(0);  
  const [colour, setColour] = useState('red');
  const handleClick = () => { setColour('blue'); }
  const arr = [
    require('./assets/0.mp3'),
    require('./assets/1.mp3'),
    require('./assets/2.mp3'),
    require('./assets/3.mp3'),
    require('./assets/4.mp3'),
    require('./assets/5.mp3'),
    require('./assets/6.mp3'),
    require('./assets/7.mp3'),
    require('./assets/8.mp3')
  ]

  // funció asyncrona que reprodueix só
  async function playSound(position) {
    const { sound } = await Audio.Sound.createAsync(arr[position]);
    setSound(sound);
    await sound.playAsync();
  }

  // Funció que crida a la asyncrona
  const pressTouch = (index) => {
    playSound(index)
  }

  // Retorn de la vista
  return (
    <View style={[styles.container,{flexDirection: 'row'}]}>
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={pressTouch.bind(this, 3)}>
          <View style={[styles.box, styles.red]}/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={pressTouch.bind(this, 4)}>
          <View style={[styles.box, styles.blue]} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={pressTouch.bind(this, 5)}>
          <View style={[styles.box, styles.green]} />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={pressTouch.bind(this, 3)}>
          <View style={[styles.box, styles.purple]}/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={pressTouch.bind(this, 4)}>
          <View style={[styles.box, styles.pink]} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={pressTouch.bind(this, 5)}>
          <View style={[styles.box, styles.brown]} />
        </TouchableWithoutFeedback>
      </View>
      <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={pressTouch.bind(this, 6)}>
          <View style={[styles.box, styles.yellow]}/>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={pressTouch.bind(this, 7)}>
          <View style={[styles.box, styles.grey]} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={pressTouch.bind(this, 8)}>
          <View style={[styles.box, styles.orange]} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
};
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: height * 0.3,
    backgroundColor: 'black'
  },
  box: {
    borderRadius: 20,
    height: height * 0.15,
    width: width * 0.3,
    marginLeft: height * 0.01,
    marginBottom: height * 0.01
  },
  red: {
    backgroundColor: '#CB345D'
  },
  orange: {
    backgroundColor: '#3644FE'
  },
  grey: {
    backgroundColor: '#7A05FE'
  },
  pink: {
    backgroundColor: '#C500FF'
  },
  purple: {
    backgroundColor: '#FC6FA7'
  },
  blue: {
    backgroundColor: '#FF63A1'
  },
  green: {
    backgroundColor: '#CA01FE'
  },
  brown: {
    backgroundColor: '#5210A8'
  },
  yellow: {
    backgroundColor: '#CF00FE'
  }
});

export default AppLauncher;