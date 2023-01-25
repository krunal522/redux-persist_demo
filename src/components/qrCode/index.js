import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    Text,
    StatusBar,
    TextInput,
    Button,
    View,
    TouchableOpacity,
} from 'react-native';
import RNQRGenerator from 'rn-qr-generator';

const { height } = Dimensions.get('screen');

const App = () => {
    const [imageUri, setImageUri] = useState(null);
    const [text, setText] = useState('');

    const generate = () => {
        RNQRGenerator.generate({
            value: text,
            height: 300,
            width: 300,
            base64: true,
            backgroundColor: 'white',
            color: 'black',
            correctionLevel: 'M',

        })
            .then((response) => {
                console.log('Response:', response);
                setImageUri({ uri: response.uri });
            })
            .catch((err) => console.log('Cannot create QR code', err));
    };


    const handleChange = (val) => {
        setText(val);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.title}>Enter text to generate QR code</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleChange}
                    value={text}
                />
                <TouchableOpacity style={styles.button} onPress={generate}>
                    <Text style={styles.buttonText}>Generate</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.image} source={imageUri} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
});

export default App;