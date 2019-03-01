// @flow

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components';

const Wrapper = styled(TouchableOpacity)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('35%')}px;
  height: ${({ theme }) => theme.metrics.getHeightFromDP('30%')}px;
`;

const Image = styled(FastImage).attrs(({ uri }) => ({
  source: {
    uri:
      'data:image/jpeg;base64,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',
  },
}))`
  width: 100%;
  height: 90%;
  border-radius: 5px;
  background-color: #f0f;
`;

const Name = styled(Text).attrs({
  numberOfLines: 2,
})`
  margin-top: ${({ theme }) => theme.metrics.smallSize}px;
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
  font-family: CircularStd-Bold;
  color: ${({ theme }) => theme.colors.white};
`;

const RelatedAuthorsListItem = (): Object => (
  <Wrapper>
    <Image />
    <Name>Stenio Wagner Pereira de Freitas</Name>
  </Wrapper>
);

export default RelatedAuthorsListItem;
