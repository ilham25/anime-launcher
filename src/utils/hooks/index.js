import {useState} from 'react';

import {ToastAndroid} from 'react-native';

import {API} from '@utils/axios/api';
import {AL_ERROR_CODE} from '@utils/constants/errorCode';

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

      ToastAndroid.show(
        `Error Code ${AL_ERROR_CODE.EXECUTOR_CODE} : ${error}`,
        ToastAndroid.SHORT,
      );

      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return [executor, {data, loading, error}];
};
