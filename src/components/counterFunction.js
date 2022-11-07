import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export const FunctionCounter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
                if (counter > 0) {
            return (setCounter(counter - 1))
        }
    }
    const reset = () => {
        setCounter(0)
    }
    
    return(
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.counter}>{counter}</Text>
                <TouchableOpacity style={styles.button} onPress={increment}>
                    <Text style={styles.text}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={decrement}>
                    <Text style={styles.text}>Decrement</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonRes} onPress={reset}>
                    <Text style={styles.text}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: "#8C7371",
        flex: 1,
        width: "100%",
        marginTop: 150
    },
    container: {
        margin: 100,
        marginTop: 20
    },
    button: {
        backgroundColor: "#007AFF",
        height: 50,
        width: 200,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    text: {
        color: "white",
        fontSize: 25,
    },
    counter: {
        fontSize: 50,
        justifyContent: 'center',
        position: 'relative',
        left: 83,
        paddingBottom: 30,
        color: "#FFF"
    },
    buttonRes: {
        marginLeft: 65,
        marginTop: 80,
    }
})