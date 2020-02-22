import {Animated} from 'react-native';
import {testHook} from './testHook';
import useOnLoadAnimation from './useOnLoadAnimation';

describe('useOnLoadAnimation', () => {
  let animate;
  beforeEach(() => {
    testHook(() => (animate = useOnLoadAnimation()));
  });

  it('should return the correct animted value', () => {
    expect(animate).toBeInstanceOf(Animated.Value);
  });
});
