import React, { Component } from "react";
import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <View>
                <Text>HAIIIII</Text>
                <TouchableOpacity onPress={ () => ToastAndroid.show( ' diklik', ToastAndroid.SHORT)}>
                    <Text>Pindah screen ke detail</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Home;