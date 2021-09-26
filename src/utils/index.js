import {PermissionsAndroid, ToastAndroid} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {VIDEO_EXTENSIONS} from './constants/fileExtensions';

export const isEven = num => !Boolean(num % 2);

export const getDirectory = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const getDirNameRegex = /%3A/g;

      const response = await DocumentPicker.pickDirectory();

      const externalDir = RNFS.ExternalStorageDirectoryPath + '/';
      const selectedDir = response.uri.split(getDirNameRegex)[1];

      const fullDirName = decodeURIComponent(externalDir + selectedDir);

      return fullDirName;
    } else {
      ToastAndroid.show('Access Denied!');
    }
  } catch (error) {
    console.log('err', error);
    ToastAndroid.show('Error');
  }
};

export const getFile = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const getDirNameRegex = /%3A/g;

      const response = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.images,
      });
      const externalDir = RNFS.ExternalStorageDirectoryPath + '/';
      const selectedFile = response.uri.split(getDirNameRegex)[1];

      const fullFileName = decodeURIComponent(externalDir + selectedFile);

      return fullFileName;
    } else {
      ToastAndroid.show('Access Denied!');
    }
  } catch (error) {
    console.log('err', error);
    ToastAndroid.show('Error');
  }
};

export const getEpisodes = async dir => {
  const videoFilesRegex = /\.([^.]*?)(?=\?|#|$)/;
  const readDir = await RNFS.readDir(dir);
  const filterVideos = readDir.filter(
    vid =>
      vid.isFile() &&
      VIDEO_EXTENSIONS.includes(vid.name.match(videoFilesRegex)[1]),
  );
  return filterVideos.map(vid => vid.path);
};

export const setStorage = async item => {
  try {
    await AsyncStorage.setItem('animeLauncherData', JSON.stringify(item));
  } catch (error) {
    console.error('setStorage', error);
  }
};

export const getStorage = async () => {
  try {
    const storage = await AsyncStorage.getItem('animeLauncherData');
    return JSON.parse(storage);
  } catch (error) {
    console.error('getStorage', error);
  }
};

export const createRandomString = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);
