import {PermissionsAndroid, ToastAndroid} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sortArray from 'sort-array';

import {VIDEO_EXTENSIONS} from './constants/fileExtensions';

const externalStorageDirectoryUri =
  'content://com.android.externalstorage.documents/tree/primary:';
const externalStorageFileUri =
  'content://com.android.externalstorage.documents/document/primary:';
const externalDir = RNFS.ExternalStorageDirectoryPath + '/';

export const isEven = num => !Boolean(num % 2);

export const getDirectory = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const response = await DocumentPicker.pickDirectory();
      const selectedDir = decodeURIComponent(response.uri).split(
        externalStorageDirectoryUri,
      )[1];

      const fullDirName = decodeURIComponent(externalDir + selectedDir);

      return fullDirName;
    } else {
      ToastAndroid.show('Access Denied!', ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('getDirectory err', error);
  }
};

export const getFile = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const response = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.images,
      });
      const selectedFile = decodeURIComponent(response.uri).split(
        externalStorageFileUri,
      )[1];

      const fullFileName = decodeURIComponent(externalDir + selectedFile);

      return fullFileName;
    } else {
      ToastAndroid.show('Access Denied!', ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('getFile err', error);
  }
};

export const getEpisodes = async dir => {
  try {
    const videoFilesRegex = /\.([^.]*?)(?=\?|#|$)/;
    const readDir = await RNFS.readDir(dir);
    const filterVideos = readDir.filter(
      vid =>
        vid.isFile() &&
        VIDEO_EXTENSIONS.includes(vid.name.match(videoFilesRegex)[1]),
    );

    const videosPath = filterVideos.map(vid => vid.path);

    return sortArray(videosPath, {order: 'asc'});
  } catch (error) {
    console.log('getEpisodes err', error);
  }
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
