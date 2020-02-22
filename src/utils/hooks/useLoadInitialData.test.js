import {testHook} from './testHook';
import useLoadInitialData from './useLoadInitialData';

const initialAction = jest.fn();

describe('useLoadInitialData', () => {
  beforeEach(() => {
    testHook(() => useLoadInitialData(initialAction));
  });

  it('should call initialAction', () => {
    expect(initialAction).toHaveBeenCalledTimes(1);
  });
});
