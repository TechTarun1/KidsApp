import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';

const Level5 = () => {
  const nonCompoundWords = [
    'public', 'pocket', 'napkin', 'invent', 'plastic', 'droplet',
    'random', 'contest', 'dentist', 'contact', 'fragment', 'children',
    'cactus', 'fabric', 'suspect', 'dragon', 'absent', 'magnet',
  ];

  const compoundWords = [
    'laptop', 'batman', 'catfish', 'sandpit', 'uplift', 'desktop',
    'lipstick', 'lunchbox', 'backhand', 'trustful', 'handshake', 'dustbin',
    'helpless', 'himself', 'backyard', 'downtown', 'sunlight', 'windmill',
  ];

  const sentences = [
    'The public event was held in the park.',
    'He put his keys in his pocket.',
    'She used a napkin to wipe her mouth.',
    'Thomas Edison was a prolific inventor.',
    'The bottle is made of plastic.',
    'Raindrops fell like tiny droplets.',
    'The contest winner received a prize.',
    'The dentist checked my teeth.',
    'Please contact me by email.',
    'The fragment of the broken vase was on the floor.',
    'The children played happily in the playground.',
    'The cactus has sharp needles.',
    'The fabric of the dress was soft.',
    'The suspect was taken into custody.',
    'The dragon flew through the sky.',
    'The absent student missed the test.',
    'The magnet attracted metal objects.',
    'She uses a laptop for her work.',
    'He dressed up as Batman for Halloween.',
    'They had catfish for dinner.',
    'The kids played in the sandpit.',
    'He helped uplift the heavy box.',
    'She works on a desktop computer.',
    'She put on some lipstick before going out.',
    'He packed his lunch in a lunchbox.',
    'He hit the ball with a backhand shot.',
    'They had a trustful relationship.',
    'They shook hands with a firm handshake.',
    'He threw the garbage in the dustbin.',
    'The helpless puppy was rescued.',
    'He built the treehouse by himself.',
    'The backyard is a nice place to relax.',
    'They walked downtown to the park.',
    'The sunlight filtered through the trees.',
    'The windmill spun in the breeze.',
  ];

  // Calculate the number of columns based on the available screen width
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const columnWidth = (screenWidth) / numColumns; // Subtracting 40 to account for margins and padding

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Compound Words</Text>
      <View style={styles.wordsTable}>
        <FlatList
          data={compoundWords}
          renderItem={({ item }) => (
            <View style={[styles.wordCell, { width: columnWidth }]}>
              <Text style={styles.wordText}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
        />
      </View>

      <Text style={styles.headerText}>Non-Compound Words</Text>
      <View style={styles.wordsTable}>
        <FlatList
          data={nonCompoundWords}
          renderItem={({ item }) => (
            <View style={[styles.wordCell, { width: columnWidth }]}>
              <Text style={styles.wordText}>{item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={numColumns}
        />
      </View>

      <Text style={styles.headerText}>Sentences</Text>
      <View style={styles.sentencesContainer}>
        {sentences.map((sentence, index) => (
          <View key={index} style={styles.sentenceCell}>
            <Text style={styles.sentenceText}>{sentence}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF5EB',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F6B6F',
    marginVertical: 20,
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

export default Level5;