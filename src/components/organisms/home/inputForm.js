import React from 'react';

import {View, Dimensions, ToastAndroid} from 'react-native';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {StackActions} from '@react-navigation/native';

import FormControl from '@components/atoms/formControl';
import FormLabel from '@components/atoms/formLabel';
import TextInput from '@components/atoms/textInput';
import TextError from '@components/atoms/textError';
import Button from '@components/atoms/button';
import ImagePreview from '@components/atoms/imagePreview';
import SubLabel from '@components/atoms/subLabel';
import colors from '@utils/themes/colors';
import {getDirectory} from '@utils/';
import {getFile} from '@utils/';
import {useDefaultContext} from '@utils/contexts';
import {createRandomString} from '@utils/';

const Screen = Dimensions.get('screen');

const InputForm = ({navigation}) => {
  const [_, dispatch] = useDefaultContext();

  const formik = useFormik({
    initialValues: {
      title: '',
      directory: '',
      image: '',
    },
    validationSchema: yup.object({
      title: yup.string().required('Nama anime tidak boleh kosong'),
      directory: yup.string().required('Direktori tidak boleh kosong'),
    }),
    onSubmit: values => {
      const id = createRandomString();
      dispatch({
        type: 'UPDATE_LIST',
        anime: {
          id,
          ...values,
        },
      });
      ToastAndroid.show('Anime berhasil ditambahkan', ToastAndroid.SHORT);
      navigation.dispatch(StackActions.pop(1));
    },
  });

  const handleDirectory = async field => {
    try {
      const selectedDir = await getDirectory();
      formik.setFieldValue(field, selectedDir);
    } catch (error) {
      console.log('selectDir err', error);
    }
  };

  const handleFile = async field => {
    try {
      const selectedFile = await getFile();
      formik.setFieldValue(field, selectedFile);
    } catch (error) {
      console.log('selectedFile err', error);
    }
  };

  const isDisabled = !formik.values.title || !formik.values.directory;
  return (
    <View style={{padding: 20}}>
      <FormControl>
        <FormLabel isRequired>Nama Anime</FormLabel>
        <TextInput
          onChangeText={formik.handleChange('title')}
          onBlur={formik.handleBlur('title')}
        />
        {formik.errors.title && formik.touched.title && (
          <TextError>{formik.errors.title}</TextError>
        )}
      </FormControl>
      <FormControl>
        <FormLabel isRequired>Pilih direktori</FormLabel>
        <Button
          onPress={() => {
            handleDirectory('directory');
          }}
        />

        {formik.errors.directory && formik.touched.directory && (
          <TextError>{formik.errors.directory}</TextError>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Pilih wallpaper</FormLabel>
        <SubLabel>*gambar digunakan untuk preview anime</SubLabel>
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
                  uri: `file://${formik.values.image}`,
                }
          }
        />
      </FormControl>
      <FormControl>
        <Button
          label="Simpan"
          onPress={formik.handleSubmit}
          backgroundColor={colors.PRIMARY}
          disabled={isDisabled}
        />
      </FormControl>
    </View>
  );
};

export default InputForm;