import React from 'react';
import Draggable from 'react-draggable';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class Window extends React.Component {
 
  render() {
    const { classes } = this.props;
    return (
        <Draggable
        handle=".handle"
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
                <div 
                style = {{
                  width: 600,
                  height: 200,
                }}>
                <Card 
                containerStyle = {{
                  width: 600,
                  height: 200,
                }}>
                    <div className="handle"> drag me
                    </div>
                    <Card.Title>Window Title</Card.Title>
                    <Card.Divider/>
                    <Text style={{marginBottom: 10}}>
                    Hello World!
                    </Text>
                    <Card.Divider/>
                    <Button
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='Click me' 
                    />                
                    </Card>
                </div>
        </Draggable>
    );
  }
}

export default Window;