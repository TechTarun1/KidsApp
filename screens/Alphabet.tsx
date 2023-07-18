import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const Alphabet = () => {

    const [sound, setSound] = useState<any>(null);

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            alphabets[currentAlphabetIndex].sound
        );
        setSound(sound);
        await sound.playAsync();
    }

    const stopSound = async () => {
        setSound(null);
        await sound.stopAsync()
    }

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const navigation: any = useNavigation();

    const alphabets = [
        { letter: 'A a', image: require('../assets/A.png'), objectName: 'Apple', sound: require('../assets/Alphabet.mp3') },
        { letter: 'B b', image: require('../assets/A.png'), objectName: 'Ball', sound: require('../assets/Alphabet.mp3') },
        { letter: 'C c', image: require('../assets/A.png'), objectName: 'Cat', sound: require('../assets/Alphabet.mp3') },
        { letter: 'D d', image: require('../assets/A.png'), objectName: 'Dog', sound: require('../assets/Alphabet.mp3') },
        { letter: 'E e', image: require('../assets/A.png'), objectName: 'Elephant', sound: require('../assets/Alphabet.mp3') },
        { letter: 'F f', image: require('../assets/A.png'), objectName: 'Fish', sound: require('../assets/Alphabet.mp3') },
        { letter: 'G g', image: require('../assets/A.png'), objectName: 'Giraffe', sound: require('../assets/Alphabet.mp3') },
        { letter: 'H h', image: require('../assets/A.png'), objectName: 'Horse', sound: require('../assets/Alphabet.mp3') },
        { letter: 'I i', image: require('../assets/A.png'), objectName: 'Ice Cream', sound: require('../assets/Alphabet.mp3') },
        { letter: 'J j', image: require('../assets/A.png'), objectName: 'Jug', sound: require('../assets/Alphabet.mp3') },
        { letter: 'K k', image: require('../assets/A.png'), objectName: 'Kite', sound: require('../assets/Alphabet.mp3') },
        { letter: 'L l', image: require('../assets/A.png'), objectName: 'Lion', sound: require('../assets/Alphabet.mp3') },
        { letter: 'M m', image: require('../assets/A.png'), objectName: 'Monkey', sound: require('../assets/Alphabet.mp3') },
        { letter: 'N n', image: require('../assets/A.png'), objectName: 'Nest', sound: require('../assets/Alphabet.mp3') },
        { letter: 'O o', image: require('../assets/A.png'), objectName: 'Owl', sound: require('../assets/Alphabet.mp3') },
        { letter: 'P p', image: require('../assets/A.png'), objectName: 'Penguin', sound: require('../assets/Alphabet.mp3') },
        { letter: 'Q q', image: require('../assets/A.png'), objectName: 'Queen', sound: require('../assets/Alphabet.mp3') },
        { letter: 'R r', image: require('../assets/A.png'), objectName: 'Rabbit', sound: require('../assets/Alphabet.mp3') },
        { letter: 'S s', image: require('../assets/A.png'), objectName: 'Sun', sound: require('../assets/Alphabet.mp3') },
        { letter: 'T t', image: require('../assets/A.png'), objectName: 'Tree', sound: require('../assets/Alphabet.mp3') },
        { letter: 'U u', image: require('../assets/A.png'), objectName: 'Umbrella', sound: require('../assets/Alphabet.mp3') },
        { letter: 'V v', image: require('../assets/A.png'), objectName: 'Violin', sound: require('../assets/Alphabet.mp3') },
        { letter: 'W w', image: require('../assets/A.png'), objectName: 'Whale', sound: require('../assets/Alphabet.mp3') },
        { letter: 'X x', image: require('../assets/A.png'), objectName: 'Xylophone', sound: require('../assets/Alphabet.mp3') },
        { letter: 'Y y', image: require('../assets/A.png'), objectName: 'Yacht', sound: require('../assets/Alphabet.mp3') },
        { letter: 'Z z', image: require('../assets/A.png'), objectName: 'Zebra', sound: require('../assets/Alphabet.mp3') },
    ];

    const [currentAlphabetIndex, setCurrentAlphabetIndex] = useState(0);

    const handleSliderChange = (value) => {
        const newIndex = Math.floor(value);
        setCurrentAlphabetIndex(newIndex);
    };

    const handleNext = () => {
        if (currentAlphabetIndex === alphabets.length - 1) {
            navigation.navigate('Congrats');
        } else {
            setCurrentAlphabetIndex(currentAlphabetIndex + 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', height: '15%', justifyContent: 'center' }}>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={alphabets.length - 1}
                    value={currentAlphabetIndex}
                    onValueChange={handleSliderChange}
                    step={1}
                    minimumTrackTintColor="orange"
                    maximumTrackTintColor="gray"
                    thumbTintColor="orange"
                />
                <Text style={{ fontWeight: 'bold' }}>{currentAlphabetIndex}/25</Text>
            </View>
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', padding: '4%', height: '30%' }}>
                <Text style={styles.letter}>{alphabets[currentAlphabetIndex].letter}</Text>
                <Image source={alphabets[currentAlphabetIndex].image} style={styles.image} />
            </View>
            <View style={[styles.play]}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 15, width: 'auto', paddingLeft: 10 }}>Speak the sentence</Text>
                    <Text style={{ fontSize: 24, color: 'orange', fontWeight: '500', marginTop: 10 }}>"{alphabets[currentAlphabetIndex].letter.split(' ')[0]} for {alphabets[currentAlphabetIndex].objectName}"</Text>
                </View>
                {sound == null ? <TouchableOpacity onPress={() => { playSound() }}>
                    <Image source={require('../assets/play-circle.png')} />
                </TouchableOpacity> :
                    <TouchableOpacity onPress={() => { stopSound() }}>
                        <Image source={require('../assets/pause.png')} style={{ height: 50, width: 50, borderRadius: 50, backgroundColor: 'red' }} />
                    </TouchableOpacity>}
            </View>
            <View style={{ width: '90%', marginTop: '17%', height: '37%' }}>
                <TouchableOpacity style={currentAlphabetIndex > 0 ? styles.button : styles.disabledBtn} onPress={() => currentAlphabetIndex > 0 ? handleSliderChange(currentAlphabetIndex - 1) : ''}>
                    <AntDesign name="stepbackward" size={20} color="white" />
                    <Text style={[styles.buttonText, { textAlign: 'center' }]}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleNext()}>
                    <Text style={[styles.buttonText, { textAlign: 'center' }]}>{currentAlphabetIndex === alphabets.length - 1 ? 'Done' : 'Next'}</Text>
                    <AntDesign name="stepforward" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF5EB',
    },
    image: {
        resizeMode: 'cover'
    },
    letter: {
        fontSize: 94,
        fontWeight: '500',
        color: '#C2410C'
    },
    objectName: {
        fontSize: 18,
        marginBottom: 20,
    },
    slider: {
        width: '100%',
        height: 30,
    },
    play: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        height: '15%',
        borderRadius: 15,
        borderColor: 'orange',
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: 'orange',
        borderRadius: 15,
        marginBottom: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    disabledBtn: {
        backgroundColor: '#D4D4D4',
        borderRadius: 15,
        marginBottom: 10,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default Alphabet;