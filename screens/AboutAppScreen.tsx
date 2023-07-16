import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutAppScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../assets/intro.png')} style={styles.logo} />
                <Text style={styles.description}>
                    Kids enjoy learn and become innovative.
                </Text>
                <Text style={styles.version}>Version 1.0.0</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6D6C6',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    logo: {
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    version: {
        fontSize: 14,
        color: '#555',
    },
});

export default AboutAppScreen;