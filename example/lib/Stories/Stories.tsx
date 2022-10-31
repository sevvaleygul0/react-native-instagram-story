import React, {useState} from 'react';
import {Animated, Dimensions, StyleSheet, View, ViewStyle} from 'react-native';
/**
 * ? Local Imports
 */
import styles from './Stories.style';
import Story from './Story/Story';

const {width} = Dimensions.get('window');
const perspective = 350;
const A = Math.atan(perspective / width / 2);

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

  const getAnimatedViewStyle = (index: number): ViewStyle => {
    const offset = width * index;
    const inputRange = [offset - width, offset + width];
    const translateX = x.interpolate({
      inputRange,
      outputRange: [width / 2, -width / 2],
      extrapolate: 'clamp',
    });
    const rotateY = x.interpolate({
      inputRange,
      outputRange: [`${A}rad`, `-${A}rad`],
      extrapolate: 'clamp',
    });
    const translateX1 = x.interpolate({
      inputRange,
      outputRange: [width / 2, -width / 2],
      extrapolate: 'clamp',
    });
    return {
      ...StyleSheet.absoluteFillObject,
      transform: [
        {perspective},
        {translateX},
        {rotateY},
        {translateX: translateX1},
      ],
    };
  };

  return (
    <View style={styles.container}>
      {stories.map((storyItem, index) => (
        //* AbsoluteFill is an easy way to set a view to be full screen and absolute positioned.
        <Animated.View style={getAnimatedViewStyle(index)} key={storyItem.id}>
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
