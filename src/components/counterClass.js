import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export class CounterClass extends React.Component {
    state = {count: 0};
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.count}>{this.state.count}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.setState({count: this.state.count + 1 });
                    }}>
                        <Text style={styles.text}>Increment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if (this.state.count > 0) {
                            return this.setState({count: this.state.count - 1 });
                        }
                    }}>
                        <Text style={styles.text}>Decrement</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setState({count: 0});
                    }}>
                        <Text style={styles.reset}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    count: {
        fontSize: 50,
        marginLeft: 85,
        marginBottom: 30
    },
    button: {
        backgroundColor: "#007AFF",
        width: 200,
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 20,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text: {
        color: "#FFF",
        fontSize: 25,
     
    },
    reset: {
        fontSize: 25,
        position: "absolute",
        top: 60,
        left: 70
    },
    container: {
        marginTop: 50
    }
})