// Import libraries for making a component
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// Make a component
const Header = ({title}) => {
  const {textStyle, viewStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    paddingTop: 15,
    height: 60,
    backgroundColor: '#f8f8f8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    
  }
};
// Make the library export
export {Header};