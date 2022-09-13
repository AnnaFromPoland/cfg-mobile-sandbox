import { Text, StyleSheet, Pressable } from 'react-native';

function doSomething() {
    console.log("I'm doing something!")
}

export default function Button(props) {
    const { onPress, title } = props;
    return (
        <Pressable style={styles.button} onPress={doSomething}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        alighItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        margin: 5,
        marginBottom: 5
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold',
        color: 'white'
    }
})