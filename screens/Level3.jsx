import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, FlatList } from 'react-native';

const Level3 = () => {
    const sightWords = [
        'the', 'of', 'and', 'a', 'to', 'in', 'is', 'you', 'that', 'it',
        'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'I',
        'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'words',
        'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said',
        'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if',
        'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so',
        'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look',
        'two', 'more', 'write', 'go', 'see', 'no', 'way', 'could', 'people', 'my',
        'than', 'first', 'water', 'been', 'called', 'who', 'am', 'its', 'now', 'find',
        'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'number'
    ];

    // Calculate the number of columns based on the available screen width
    const screenWidth = Dimensions.get('window').width;
    const numColumns = 3;
    const columnWidth = screenWidth / numColumns;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sight Words</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.sightWordsTable}>
                    <FlatList
                        data={sightWords}
                        renderItem={({ item }) => (
                            <View style={[styles.tableCell, { width: columnWidth }]}>
                                <Text style={styles.sightWordText}>{item}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={numColumns}
                    />
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
        backgroundColor: '#E6F2EE',
    },
    header: {
        paddingVertical: 20,
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
    sightWordsTable: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#4F6B6F',
        borderRadius: 10,
        backgroundColor: '#FFF',
        margin: 10,
    },
    tableCell: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#4F6B6F',
    },
    sightWordText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    },
});

export default Level3;