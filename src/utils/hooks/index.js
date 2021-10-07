import {useState} from 'react';

import {API} from '@utils/axios/api';

export const useLazyQuery = (
  options = {
    onCompleted: () => {},
  },
) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const executor = async params => {
    try {
      setLoading(true);

      setTimeout(() => {
        if (loading) {
          setLoading(false);
        }
      }, 500);

      const response = await API.get(params);
      if (response?.data) {
        setLoading(false);
        setData(response?.data?.results);

        options.onCompleted(response?.data);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log('API ERR', error);

      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return [executor, {data, loading, error}];
};
