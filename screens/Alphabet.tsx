import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { AntDesign } from '@expo/vector-icons';
import Audio from 'expo-av';

const Alphabet = () => {

    const navigation: any = useNavigation();

    const alphabets = [
        { letter: 'A a', image: require('../assets/A.png'), objectName: 'Apple' },
        { letter: 'B b', image: require('../assets/A.png'), objectName: 'Ball' },
        { letter: 'C c', image: require('../assets/A.png'), objectName: 'Cat' },
        { letter: 'D d', image: require('../assets/A.png'), objectName: 'Dog' },
        { letter: 'E e', image: require('../assets/A.png'), objectName: 'Elephant' },
        { letter: 'F f', image: require('../assets/A.png'), objectName: 'Fish' },
        { letter: 'G g', image: require('../assets/A.png'), objectName: 'Giraffe' },
        { letter: 'H h', image: require('../assets/A.png'), objectName: 'Horse' },
        { letter: 'I i', image: require('../assets/A.png'), objectName: 'Ice Cream' },
        { letter: 'J j', image: require('../assets/A.png'), objectName: 'Jug' },
        { letter: 'K k', image: require('../assets/A.png'), objectName: 'Kite' },
        { letter: 'L l', image: require('../assets/A.png'), objectName: 'Lion' },
        { letter: 'M m', image: require('../assets/A.png'), objectName: 'Monkey' },
        { letter: 'N n', image: require('../assets/A.png'), objectName: 'Nest' },
        { letter: 'O o', image: require('../assets/A.png'), objectName: 'Owl' },
        { letter: 'P p', image: require('../assets/A.png'), objectName: 'Penguin' },
        { letter: 'Q q', image: require('../assets/A.png'), objectName: 'Queen' },
        { letter: 'R r', image: require('../assets/A.png'), objectName: 'Rabbit' },
        { letter: 'S s', image: require('../assets/A.png'), objectName: 'Sun' },
        { letter: 'T t', image: require('../assets/A.png'), objectName: 'Tree' },
        { letter: 'U u', image: require('../assets/A.png'), objectName: 'Umbrella' },
        { letter: 'V v', image: require('../assets/A.png'), objectName: 'Violin' },
        { letter: 'W w', image: require('../assets/A.png'), objectName: 'Whale' },
        { letter: 'X x', image: require('../assets/A.png'), objectName: 'Xylophone' },
        { letter: 'Y y', image: require('../assets/A.png'), objectName: 'Yacht' },
        { letter: 'Z z', image: require('../assets/A.png'), objectName: 'Zebra' },
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
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: '4%', height: '30%' }}>
                <Text style={styles.letter}>{alphabets[currentAlphabetIndex].letter}</Text>
                <Image source={alphabets[currentAlphabetIndex].image} style={styles.image} />
            </View>
            <View style={[styles.play]}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 15, width: 'auto', paddingLeft: 10 }}>Speak the sentence</Text>
                    <Text style={{ fontSize: 24, color: 'orange', fontWeight: '500', marginTop: 10 }}>"{alphabets[currentAlphabetIndex].letter.split(' ')[0]} for {alphabets[currentAlphabetIndex].objectName}"</Text>
                </View>
                <Image source={require('../assets/play-circle.png')} />
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
        marginTop: '20%'
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