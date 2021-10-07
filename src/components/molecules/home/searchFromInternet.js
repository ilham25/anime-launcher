import React, {useState, useEffect} from 'react';

import {View, Text, Switch, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';

import Badge from '@components/atoms/badge';

import fonts from '@utils/fonts';
import {useLazyQuery} from '@utils/hooks';
import {useDefaultContext} from '@utils/contexts';
import colors from '@utils/themes/colors';

const SearchFromInternet = ({formik, nameSearchDebounce}) => {
  const [{theme}, _] = useDefaultContext();

  const [isSearch, setIsSearch] = useState(false);
  const [animeList, setAnimeList] = useState([]);

  const [getAnimeData, {loading}] = useLazyQuery({
    onCompleted: ({results}) => {
      setAnimeList(
        results.filter(
          anime => !['r+', 'rx'].includes(anime.rated.toLowerCase()),
        ),
      );
    },
  });

  useEffect(() => {
    if (isSearch && nameSearchDebounce) {
      getAnimeData(`/search/anime?q=${nameSearchDebounce}&limit=5`);
    }

    if (!nameSearchDebounce) {
      setAnimeList([]);
    }
  }, [nameSearchDebounce, isSearch]);

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text
          style={{
            fontFamily: fonts.medium500,
            color: colors[theme ?? 'LIGHT'].TEXT,
          }}>
          Cari menggunakan internet
        </Text>
        <View>
          <Switch
            value={isSearch}
            onValueChange={() => setIsSearch(prev => !prev)}
            thumbColor={
              isSearch
                ? colors[theme ?? 'LIGHT'].PRIMARY
                : colors[theme ?? 'LIGHT'].GRAY
            }
          />
        </View>
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {animeList.length > 0 && (
            <View
              style={{
                marginBottom: 5,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {animeList.map((anime, idx) => (
                <Badge
                  key={idx}
                  label={anime.title}
                  onPress={() => {
                    formik.setFieldValue('image', anime.image_url);
                  }}
                />
              ))}
            </View>
          )}
        </>
      )}
    </View>
  );
};

SearchFromInternet.propTypes = {
  formik: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
  }).isRequired,
  nameSearchDebounce: PropTypes.string.isRequired,
};

export default SearchFromInternet;
