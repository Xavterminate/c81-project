import React, { Component } from "react";
import {
    View,
    Text,
    SafeAreaView,
    
} from "react-native";

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <Text>Feed</Text>
                </View>
        );
    }
}