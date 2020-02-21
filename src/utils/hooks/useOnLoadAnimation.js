import {useEffect, useState} from 'react';
import {Animated, Easing} from 'react-native';

const useOnLoadAnimation = () => {
  const [animate] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animate, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bounce,
    }).start();

    //  disable the role because the fetch function only runs once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return animate;
};

export default useOnLoadAnimation;
