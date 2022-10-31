import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Stories} from './lib';
import {IStory} from './lib/Stories/Stories';

const stories: IStory[] = [
  {
    id: '1',
    storyPhoto: require('./lib/assets/stories/building.jpg'),
    user: 'user1',
    userPhoto: require('./lib/assets/users/man-2.jpg'),
  },
  {
    id: '2',
    storyPhoto: require('./lib/assets/stories/donut.jpg'),
    user: 'user2',
    userPhoto: require('./lib/assets/users/woman.jpg'),
  },
  {
    id: '3',
    storyPhoto: require('./lib/assets/stories/palm.jpg'),
    user: 'user3',
    userPhoto: require('./lib/assets/users/dog.jpg'),
  },
  {
    id: '4',
    storyPhoto: require('./lib/assets/stories/sky.jpg'),
    user: 'user4',
    userPhoto: require('./lib/assets/users/man-2.jpg'),
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Stories stories={stories} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
