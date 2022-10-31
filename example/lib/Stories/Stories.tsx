import React, {useState} from 'react';
import {Animated, Dimensions, ScrollView, StyleSheet, View} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './Stories.style';
import Story from './Story/Story';

const {width} = Dimensions.get('window');

export type IStory = {
  id: string;
  storyPhoto: number;
  user: string;
  userPhoto: number;
};

interface IStoriesProps {
  stories: IStory[];
}

interface IState {
  x: Animated.Value;
}

const Stories: React.FC<IStoriesProps> = ({stories}) => {
  const [x] = useState(new Animated.Value(0));

  return (
    <View style={styles.container}>
      {stories.map(storyItem => (
        //* AbsoluteFill is an easy way to set a view to be full screen and absolute positioned.
        <Animated.View style={StyleSheet.absoluteFill} key={storyItem.id}>
          <Story {...{storyItem}} />
        </Animated.View>
      ))}
      <Animated.ScrollView
        style={StyleSheet.absoluteFill}
        contentContainerStyle={{width: width * stories.length}}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event([{nativeEvent: {contentOffset: {x}}}], {
          useNativeDriver: true,
        })}
        horizontal={true}
      />
    </View>
  );
};

export default Stories;
