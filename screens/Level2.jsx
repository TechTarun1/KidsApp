import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Audio } from 'expo-av';

const Level2 = () => {
    const [sound, setSound] = useState(null);
    const playSound = async (blendSound) => {
        try {
          // Unload any currently playing sound
          if (sound) {
            await sound.unloadAsync();
          }
    
          const { sound: newSound } = await Audio.Sound.createAsync(blendSound);
          setSound(newSound);
          await newSound.playAsync();
        } catch (error) {
          console.log('Error playing sound:', error);
        }
      };
    
      const stopSound = async () => {
        try {
          if (sound) {
            await sound.stopAsync();
          }
        } catch (error) {
          console.log('Error stopping sound:', error);
        }
      };
    
      useEffect(() => {
        return () => {
          // Unload the sound when the component unmounts
          if (sound) {
            sound.unloadAsync();
          }
        };
      }, [sound]);

    // Function to generate a random color from a predefined list
    const getRandomColor = () => {
        const colors = [
            '#F39C12',
            '#3498DB',
            '#E74C3C',
            '#9B59B6',
            '#27AE60',
            '#2980B9',
            '#E67E22',
            '#16A085',
            '#D35400',
            '#8E44AD',
            '#C0392B',
            '#1ABC9C',
            '#F1C40F',
            '#2ECC71',
            '#E74C3C',
            '#3498DB',
            '#9B59B6',
            '#27AE60',
            '#F39C12',
            '#E67E22',
            '#2980B9',
            '#2ECC71',
            '#C0392B',
            '#3498DB',
            '#8E44AD',
            '#F1C40F',
            '#D35400',
            '#1ABC9C',
            '#16A085',
            '#27AE60',
        ];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    // Calculate the button size based on screen width
    const buttonSize = Dimensions.get('window').width * 0.23;

    const consonantBlends = [
        { name: 'ch', sound: require('../assets/Alphabet.mp3') },
        { name: 'sh', sound: require('../assets/Alphabet.mp3') },
        { name: 'th', sound: require('../assets/Alphabet.mp3') },
        { name: 'wh', sound: require('../assets/Alphabet.mp3') },
        { name: 'bl', sound: require('../assets/Alphabet.mp3') },
        { name: 'cl', sound: require('../assets/Alphabet.mp3') },
        { name: 'fl', sound: require('../assets/Alphabet.mp3') },
        { name: 'gl', sound: require('../assets/Alphabet.mp3') },
        { name: 'pl', sound: require('../assets/Alphabet.mp3') },
        { name: 'sl', sound: require('../assets/Alphabet.mp3') },
        { name: 'sc', sound: require('../assets/Alphabet.mp3') },
        { name: 'sk', sound: require('../assets/Alphabet.mp3') },
        { name: 'sm', sound: require('../assets/Alphabet.mp3') },
        { name: 'sn', sound: require('../assets/Alphabet.mp3') },
        { name: 'sp', sound: require('../assets/Alphabet.mp3') },
        { name: 'st', sound: require('../assets/Alphabet.mp3') },
        { name: 'sw', sound: require('../assets/Alphabet.mp3') },
        { name: 'br', sound: require('../assets/Alphabet.mp3') },
        { name: 'cr', sound: require('../assets/Alphabet.mp3') },
        { name: 'dr', sound: require('../assets/Alphabet.mp3') },
        { name: 'fr', sound: require('../assets/Alphabet.mp3') },
        { name: 'gr', sound: require('../assets/Alphabet.mp3') },
        { name: 'pr', sound: require('../assets/Alphabet.mp3') },
        { name: 'tr', sound: require('../assets/Alphabet.mp3') },
        { name: 'ph', sound: require('../assets/Alphabet.mp3') },
        { name: 'kn', sound: require('../assets/Alphabet.mp3') },
        { name: 'scr', sound: require('../assets/Alphabet.mp3') },
        { name: 'spl', sound: require('../assets/Alphabet.mp3') },
        { name: 'spr', sound: require('../assets/Alphabet.mp3') },
        { name: 'str', sound: require('../assets/Alphabet.mp3') },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Consonant Blends & Digraphs</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.blendsContainer}>
                    {consonantBlends.map((consonant) => (
                        <TouchableOpacity
                            key={consonant.name}
                            style={[styles.blendButton, { backgroundColor: getRandomColor(), width: buttonSize, height: buttonSize }]}
                            onPress={() => playSound(consonant.sound)}
                        >
                            <Text style={styles.blendText}>{consonant.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF5EB',
    },
    header: {
        paddingVertical: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4F6B6F',
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
    },
    blendsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    blendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
        elevation: 5,
    },
    blendText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Level2;
