import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [viewImage, setViewImage] = useState(false);
    const [image, setImage] = useState('');
    const [levelName, setLevelName] = useState('');
    const [levelNavigation, setLevelNavigation] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/background.png')}
                style={styles.backgroundImage}
                resizeMode="stretch"
            >
                <TouchableOpacity onPress={() => { setViewImage(true); setImage(require('../assets/sentence.png')); setLevelName('Beginner Level:5'); setLevelNavigation('Level5'); }}
                    style={{ flex: 1, left: '70%', top: '2%', justifyContent: 'center' }}
                >
                    <Image source={require('../assets/sentence.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setViewImage(true); setImage(require('../assets/greeting.png')); setLevelName('Level:4'); setLevelNavigation('Level4'); }} style={{ flex: 1, left: '13%', bottom: '6%', justifyContent: 'center' }}>
                    <Image source={require('../assets/greeting.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setViewImage(true); setImage(require('../assets/alphabet.png')); setLevelName('Level:3'); setLevelNavigation('Level3'); }} style={{ flex: 1, left: '78%', top: '5%' }}>
                    <Image source={require('../assets/alphabet.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setViewImage(true); setImage(require('../assets/intro.png')); setLevelName('Level:2'); setLevelNavigation('Level2'); }} style={{ flex: 1, left: '19%', bottom: '3%' }}>
                    <Image source={require('../assets/intro.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setViewImage(true); setImage(require('../assets/intro.png')); setLevelName('Beginner Level:1'); setLevelNavigation('Alphabet'); }} style={{ flex: 1, left: '63%', bottom: '10%' }}>
                    <Image source={require('../assets/intro.png')} />
                </TouchableOpacity>
            </ImageBackground>
            {
                viewImage && (
                    <View style={styles.infoContainer}>
                        <View style={styles.imageInfo}>
                            <Image source={image} />
                            <View>
                                <Text style={{ fontWeight: '800' }}>{levelName}</Text>
                                <Text>Learners gain deep knowledge</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.viewBtn} onPress={() => navigation.navigate(levelNavigation)}>
                            <Text style={{ color: 'white', textAlign: 'center', fontWeight: '400', fontSize: 15 }}>View</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View >
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    infoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    imageInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewBtn: {
        backgroundColor: '#C2410C',
        borderRadius: 20,
        padding: 10,
        alignSelf: 'center',
        textAlign: 'center'
    },
});  