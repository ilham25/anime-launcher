import React from 'react';

import {ToastAndroid, ScrollView} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {StackActions} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {useDebounce} from 'use-debounce/lib';

import FormControl from '@components/atoms/formControl';
import FormLabel from '@components/atoms/formLabel';
import TextInput from '@components/atoms/textInput';
import TextError from '@components/atoms/textError';
import Button from '@components/atoms/button';
import ImagePreview from '@components/atoms/imagePreview';
import SubLabel from '@components/atoms/subLabel';
import SearchFromInternet from '@components/molecules/home/searchFromInternet';

import colors from '@utils/themes/colors';
import {getDirectory} from '@utils/';
import {getFile} from '@utils/';
import {useDefaultContext} from '@utils/contexts';
import {createRandomString} from '@utils/';
import {getEpisodes} from '@utils/';
import {isURL} from '@utils/';
import {AL_ERROR_CODE} from '@utils/constants/errorCode';

const InputForm = ({navigation, type, selected}) => {
  const [{theme}, dispatch] = useDefaultContext();
  const isEdit = type === 'edit' || '';

  const formik = useFormik({
    initialValues: {
      title: isEdit ? selected?.title : '',
      directory: isEdit ? selected?.directory : '',
      image: isEdit ? selected?.image : '',
    },
    validationSchema: yup.object({
      title: yup.string().required('Nama anime tidak boleh kosong'),
      directory: yup.string().required('Direktori tidak boleh kosong'),
    }),
    onSubmit: values => {
      handleSubmit(values);
    },
  });

  const [nameSearchDebounce] = useDebounce(formik.values.title, 1000);

  const handleDirectory = async field => {
    try {
      const selectedDir = await getDirectory();
      formik.setFieldValue(field, selectedDir);
    } catch (error) {
      console.log('selectDir err', error);
      ToastAndroid.show(
        `Error Code ${AL_ERROR_CODE.HANDLE_DIRECTORY_CODE} : ${error}`,
        ToastAndroid.SHORT,
      );
    }
  };

  const handleFile = async field => {
    try {
      const selectedFile = await getFile();
      formik.setFieldValue(field, selectedFile);
    } catch (error) {
      console.log('selectedFile err', error);
      ToastAndroid.show(
        `Error Code ${AL_ERROR_CODE.HANDLE_FILE_CODE} : ${error}`,
        ToastAndroid.SHORT,
      );
    }
  };

  const handleSubmit = async values => {
    try {
      const id = isEdit ? selected?.id : createRandomString();
      const getEpisode = await getEpisodes(values.directory);

      dispatch({
        type: 'animeList',
        payload: {
          type: isEdit ? 'EDIT_ANIME' : 'CREATE_ANIME',
          anime: {
            id,
            episodes: getEpisode?.length || 0,
            history: isEdit ? selected.history : [],
            ...values,
          },
        },
      });

      ToastAndroid.show(
        `Anime berhasil ${isEdit ? 'diubah' : 'ditambahkan'}`,
        ToastAndroid.SHORT,
      );
      navigation.dispatch(StackActions.pop(1));
    } catch (error) {
      console.log('handleSubmit err', error);
      ToastAndroid.show(
        `Error Code ${AL_ERROR_CODE.HANDLE_SUBMIT_CODE} : ${error}`,
        ToastAndroid.SHORT,
      );
    }
  };

  const isDisabled = !formik.values.title || !formik.values.directory;
  return (
    <ScrollView
      contentContainerStyle={{padding: 20, paddingBottom: 100}}
      showsVerticalScrollIndicator={false}>
      <FormControl>
        <FormLabel isRequired>Nama Anime</FormLabel>
        <TextInput
          onChangeText={formik.handleChange('title')}
          onBlur={formik.handleBlur('title')}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title && (
          <TextError>{formik.errors.title}</TextError>
        )}
      </FormControl>

      <SearchFromInternet
        formik={formik}
        nameSearchDebounce={nameSearchDebounce}
      />

      <FormControl>
        <FormLabel isRequired>Pilih direktori</FormLabel>
        <Button
          onPress={() => {
            handleDirectory('directory');
          }}
        />

        {!!formik.values.directory && (
          <SubLabel>{formik.values.directory}</SubLabel>
        )}

        {formik.errors.directory && formik.touched.directory && (
          <TextError>{formik.errors.directory}</TextError>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Pilih wallpaper</FormLabel>
        <Button
          onPress={() => {
            handleFile('image');
          }}
        />
        <ImagePreview
          source={
            !formik.values.image
              ? null
              : {
                  uri: isURL(formik.values.image)
                    ? formik.values.image
                    : `file://${formik.values.image}`,
                }
          }
        />
        {!!formik.values.image && <SubLabel>{formik.values.image}</SubLabel>}
      </FormControl>
      <FormControl>
        <Button
          label="Simpan"
          onPress={formik.handleSubmit}
          backgroundColor={colors[theme ?? 'LIGHT'].PRIMARY}
          disabled={isDisabled}
        />
      </FormControl>
    </ScrollView>
  );
};

InputForm.propTypes = {
  navigation: PropTypes.shape({dispatch: PropTypes.func.isRequired}).isRequired,
  type: PropTypes.string,
  selected: PropTypes.object,
};

export default InputForm;
