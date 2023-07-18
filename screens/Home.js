import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const [viewImage, setViewImage] = useState(false);
    const [image, setImage] = useState('');

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/background.png')}
                style={styles.backgroundImage}
                resizeMode="stretch"
            >
                <TouchableOpacity onPress={() => { setViewImage(true); setImage(require('../assets/sentence.png')) }} style={{ flex: 1, left: '79%', bottom: '2%', justifyContent: 'center' }}>
                    <Image source={require('../assets/sentence.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setViewImage(true); setImage(require('../assets/greeting.png')) }} style={{ flex: 1, left: '19%', bottom: '6%', justifyContent: 'center' }}>
                    <Image source={require('../assets/greeting.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setViewImage(true); setImage(require('../assets/alphabet.png')) }} style={{ flex: 1, left: '79%', bottom: '3%' }}>
                    <Image source={require('../assets/alphabet.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setViewImage(true); setImage(require('../assets/intro.png')) }} style={{ flex: 1, left: '19%', bottom: '16%' }}>
                    <Image source={require('../assets/intro.png')} />
                </TouchableOpacity>
            </ImageBackground>
            {
                viewImage && (
                    <View style={styles.infoContainer}>
                        <View style={styles.imageInfo}>
                            <Image source={image} />
                            <View>
                                <Text style={{ fontWeight: '800' }}>Beginner Level:1</Text>
                                <Text>Learners gain deep knowledge</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.viewBtn} onPress={() => navigation.navigate('Alphabet')}>
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