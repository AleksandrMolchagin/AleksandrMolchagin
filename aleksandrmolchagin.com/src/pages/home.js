import React, { Component } from "react";
import Draggable from 'react-draggable';
import Window from '../components/window';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class home extends Component {
    constructor(){
        super();
        this.state = {};
    };

    render(){
        return(
        <View>
            <Window></Window>
            <Window></Window>
        </View>
        );
    }
}

export default home;