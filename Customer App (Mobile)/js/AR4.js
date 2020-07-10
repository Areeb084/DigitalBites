'use strict';

import React, { Component } from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroBox,
  ViroMaterials,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroARPlane,
  ViroAnimations,
  ViroNode,
  ViroButton,
  ViroDirectionalLight,
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };
    
    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized} >
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, -1, -3]} style={styles.helloWorldTextStyle} />
        <ViroAmbientLight color={"#ffffff"} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0,-1,0]}
          position={[0, 0, -15]} color="#ffffff" castsShadow={false} />
          {/* <ViroARPlane minHeight={.5} minWidth={.5} alignment={"Horizontal"}> */}
          <ViroNode position={[7,-11,-15]} dragType="FixedToWorld" onDrag={()=>{}} >
          <Viro3DObject
    source={require("./res/obj/Adana.obj")}
    resources={[require('./res/obj/Adana.mtl'),
                require('./res/obj/kebap1.jpg'),
                require('./res/obj/mercimek-corbasi.jpg'),
                require('./res/obj/kebapdisp.jpg')
              ]}
    highAccuracyEvents={true}
    //position={[0, 0, -10]}
    scale={[.5, .5, .5]}
    rotation={[0, 0, 0]}
    type="OBJ"
    />
          
          {/* <ViroDirectionalLight
    color="#ffffff"
    direction={[0, -1, -1]}
 /> */}
 </ViroNode>
 {/* </ViroARPlane> */}
      </ViroARScene>
    );
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Andana Kebap!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
