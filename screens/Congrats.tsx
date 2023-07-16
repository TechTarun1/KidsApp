import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Congrats = () => {
    return (
        <View style={styles.container}>
            <View style={{ height: '20%', justifyContent: 'center' }}>
                <Text style={styles.congrats}>Congratulations</Text>
                <Text style={{ color: '#A855F7', fontSize: 16, lineHeight: 24, fontWeight: '500', alignSelf: 'center', marginVertical: 15 }}>Level 2 unlocked</Text>
            </View>
            <View style={{ height: '25%', justifyContent: 'space-between', flexDirection: 'row' }}>
                <Image source={require('../assets/lev1.png')} />
                <Image source={require('../assets/lev2.png')} />
                <Image source={require('../assets/lock.png')} />
            </View>
            <View style={{ height: '10%', alignItems: 'center' }}>
                <Text style={styles.congrats1}>Elementary Level</Text>
                <Text style={{ fontSize: 12, lineHeight: 24, fontWeight: '400', alignSelf: 'center' }}>Express yourself in simple terms</Text>
            </View>
            <View style={{ height: '20%', alignItems: 'center' }}>
                <Image source={require('../assets/rating.png')} style={{ resizeMode: 'cover' }} />
                <Text style={{ alignSelf: 'center' }}>Exp. 250/250</Text>
            </View>
            <TouchableOpacity style={styles.viewBtn}>
                <Text style={{ color: 'orange', textAlign: 'center', fontWeight: '400', fontSize: 15 }}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        height: '100%',
        padding: '5%'
    },
    congrats: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 30,
        alignSelf: 'center'
    },
    congrats1: {
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30
    },
    largeImage: {
        width: 150,
        height: 150,
        marginBottom: 20,
        resizeMode: 'cover'
    },
    smallImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallImage: {
        width: 100,
        height: 100,
        marginHorizontal: 10,
    },
    viewBtn: {
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 20,
        padding: 10,
        width: '100%',
        alignSelf: 'center'
    },
});

export default Congrats;

