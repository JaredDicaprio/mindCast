// @flow

import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import SectionWithButton from '../SectionWithButton';
import FeaturedListItem from './FeaturedListItem';
import CONSTANTS from '~/utils/CONSTANTS';

const Wrapper = styled(View)`
  width: 100%;
  margin-vertical: ${({ theme }) => theme.metrics.extraLargeSize}px;
`;

const ItemsWrapper = styled(View)`
  margin-left: ${({ theme }) => theme.metrics.extraLargeSize}px;
  margin-top: ${({ theme }) => theme.metrics.extraLargeSize}px;
`;

type Props = {
  featured: Array<Object>,
  navigation: Object,
};

const Featured = ({ navigation, featured }: Props): Object => (
  <Wrapper>
    <SectionWithButton
      onPress={() => navigation.navigate(CONSTANTS.NAVIGATE_PLAYER, {
        [CONSTANTS.PLAYER_PARAMS]: {
          [CONSTANTS.PLAYLIST_KEY]: featured,
        },
      })
      }
      sectionTitle="Featured"
    />
    <ItemsWrapper>
      {featured.map((podcast, index) => (
        <FeaturedListItem
          imageURL={podcast.smallImageURL}
          fileName={podcast.fileName}
          subject={podcast.subject}
          title={podcast.title}
          index={index + 1}
          key={podcast.id}
        />
      ))}
    </ItemsWrapper>
  </Wrapper>
);

export default Featured;
