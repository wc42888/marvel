import {useEffect} from 'react';
const useLoadInitialData = action => {
  useEffect(() => {
    const fetchData = async () => {
      await action();
    };

    fetchData();
    //  disable the role because the fetch function only runs once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useLoadInitialData;
