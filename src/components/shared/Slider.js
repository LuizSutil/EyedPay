import React from "react";
import Slider from "react-native-slider"; // 0.11.0
import { StyleSheet, View, Text } from "react-native";



export default class SliderExample extends React.Component {
  state = {
    value: 1
  };

  render() {
    return (
      <View style={styles.container}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
          minimumValue={10}
          maximumValue={1000}
          step={1}
        />
        <Text>
          Value: {this.state.value}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
    width:250
  }
});