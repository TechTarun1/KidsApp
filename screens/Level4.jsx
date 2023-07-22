import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';

const Level4 = () => {

    const aWords = ['cat', 'rat', 'mat', 'ran', 'sat', 'tap', 'car', 'dam', 'hat', 'lad', 'van', 'tan', 'lag', 'map', 'pad', 'pass'];
    const eWords = ['jet', 'bet', 'bed', 'men', 'net', 'pet', 'set', 'vet', 'let', 'red', 'ten', 'well', 'bell', 'leg', 'keg', 'met'];
    const iWords = ['pin', 'fin', 'fig', 'wig', 'pig', 'rig', 'tin', 'tip', 'win', 'him', 'rim', 'did', 'fit', 'pit', 'sit', 'hit'];
    const oWords = ['log', 'hog', 'fog', 'mop', 'pot', 'sob', 'cob', 'don', 'top', 'toss', 'not', 'dot', 'hot', 'mod', 'tom', 'boss'];
    const uWords = ['cut', 'hut', 'nut', 'bun', 'run', 'sun', 'pug', 'rub', 'gum', 'mutt', 'nub', 'mug', 'hug', 'dug', 'cub', 'bug'];

    const aeWords = ['face', 'mace', 'lace', 'bake', 'fake', 'cake', 'dale', 'male', 'sale', 'cane', 'lane', 'pane', 'base', 'case', 'vase', 'gave'];
    const ieWords = ['dice', 'mice', 'nice', 'hide', 'ride', 'side', 'bike', 'hike', 'like', 'dime', 'lime', 'time', 'dine', 'fine', 'line', 'rise'];
    const oeWords = ['robe', 'lobe', 'code', 'coke', 'hole', 'mole', 'home', 'tone', 'cone', 'cope', 'dose', 'rose', 'note', 'cube', 'hug', 'tube'];

    // Calculate the number of columns based on the available screen width
    const screenWidth = Dimensions.get('window').width;
    const numColumns = 3;
    const columnWidth = (screenWidth - 40) / numColumns; // Subtracting 40 to account for margins and padding

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.head}>Word Practice</Text>
            <Text style={styles.head}>CVC Words</Text>
            <Text style={styles.headerText}>Short 'a' words</Text>
                <View style={styles.wordsTable}>
                    <FlatList
                        data={aWords}
                        renderItem={({ item }) => (
                            <View style={[styles.wordCell, { width: columnWidth }]}>
                                <Text style={styles.wordText}>{item}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={numColumns}
                    />
            </View>
            <Text style={styles.headerText}>Short 'e' words</Text>
            <View style={styles.wordsTable}>
                <FlatList
                    data={eWords}
                    renderItem={({ item }) => (
                        <View style={[styles.wordCell, { width: columnWidth }]}>
                            <Text style={styles.wordText}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
            </View>

            <Text style={styles.headerText}>Short 'i' words</Text>
            <View style={styles.wordsTable}>
                <FlatList
                    data={iWords}
                    renderItem={({ item }) => (
                        <View style={[styles.wordCell, { width: columnWidth }]}>
                            <Text style={styles.wordText}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
            </View>
            <Text style={styles.headerText}>Short 'o' words</Text>
            <View style={styles.wordsTable}>
                <FlatList
                    data={oWords}
                    renderItem={({ item }) => (
                        <View style={[styles.wordCell, { width: columnWidth }]}>
                            <Text style={styles.wordText}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
            </View>
            <Text style={styles.headerText}>Short 'u' words</Text>
            <View style={styles.wordsTable}>
                <FlatList
                    data={uWords}
                    renderItem={({ item }) => (
                        <View style={[styles.wordCell, { width: columnWidth }]}>
                            <Text style={styles.wordText}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
            </View>
            <Text style={styles.head}>CVCE Words</Text>
            <Text style={styles.headerText}>Long 'a'/Silent 'e' words</Text>
            <View style={styles.wordsTable}>
                <FlatList
                    data={aeWords}
                    renderItem={({ item }) => (
                        <View style={[styles.wordCell, { width: columnWidth }]}>
                            <Text style={styles.wordText}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
            </View>
            <Text style={styles.headerText}>Long 'i'/Silent 'e' words</Text>
            <View style={styles.wordsTable}>
                <FlatList
                    data={ieWords}
                    renderItem={({ item }) => (
                        <View style={[styles.wordCell, { width: columnWidth }]}>
                            <Text style={styles.wordText}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
            </View>
            <Text style={styles.headerText}>Long 'o' and 'u'/Silent 'e' words</Text>
            <View style={styles.wordsTable}>
                <FlatList
                    data={oeWords}
                    renderItem={({ item }) => (
                        <View style={[styles.wordCell, { width: columnWidth }]}>
                            <Text style={styles.wordText}>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={numColumns}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    head: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
        marginVertical: 5,
    },
    container: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF5EB',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        marginVertical: 10,
    },
    wordsTable: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 2,
        borderColor: '#4F6B6F',
        borderRadius: 10,
        backgroundColor: '#FFF',
        margin: 10,
        paddingHorizontal: 10,
    },
    wordCell: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#4F6B6F',
    },
    wordText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    },
    sentencesContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    sentenceCell: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderWidth: 2,
        borderColor: '#4F6B6F',
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: '90%',
    },
    sentenceText: {
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'left',
    },
});

export default Level4;