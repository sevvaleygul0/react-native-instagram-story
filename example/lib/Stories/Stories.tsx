import React, {useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './Stories.style';
import Story from './Story/Story';

export type IStory = {
  id: string;
  storyPhoto: number;
  user: string;
  userPhoto: number;
};

interface IStoriesProps {
  stories: IStory[];
}

const Stories: React.FC<IStoriesProps> = ({stories}) => {
  return (
    <View style={styles.container}>
      {stories.map(storyItem => (
        //* AbsoluteFill is an easy way to set a view to be full screen and absolute positioned.
        <Animated.View style={StyleSheet.absoluteFill} key={storyItem.id}>
          <Story {...{storyItem}} />
        </Animated.View>
      ))}
    </View>
  );
};

export default Stories;
