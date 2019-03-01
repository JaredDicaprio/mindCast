// @flow

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components';

import Icon from '~/components/common/Icon';
import appStyles from '~/styles';

const Content = styled(View)`
  width: 100%;
`;

const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

const Index = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.extraLargeSize}px;
  font-family: CircularStd-Bold;
  color: ${({ theme }) => theme.colors.white};
`;

const Image = styled(FastImage).attrs(({ imageURL }) => ({
  source: {
    uri:
      'data:image/jpeg;base64,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',
  },
}))`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('16%')}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('16%')}px;
  margin-horizontal: ${({ theme }) => theme.metrics.mediumSize}px;
  border-radius: 3px;
`;

const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: ${({ theme }) => theme.metrics.getWidthFromDP('6%')};
`;

const TextContent = styled(View)`
  width: 65%;
`;

const IconContent = styled(TouchableOpacity)``;

const Title = styled(Text).attrs({
  numberOfLines: 2,
})`
  margin-bottom: ${({ theme }) => theme.metrics.extraSmallSize}px;
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
  font-family: CircularStd-Bold;
  color: ${({ theme }) => theme.colors.white};
`;

const Category = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.mediumSize * 1.1}px;
  font-family: CircularStd-Medium;
  color: ${({ theme }) => theme.colors.progressiveImageForeground};
`;

const MainContent = styled(View)`
  flex-direction: row;
`;

const BottomLine = styled(View)`
  width: 100%;
  height: 1.5px;
  margin-top: ${({ theme }) => theme.metrics.largeSize}px;
  background-color: ${({ theme }) => theme.colors.progressiveImageForeground};
`;

const FeaturedListItem = (): Object => (
  <Content>
    <Container>
      <Index>1</Index>
      <Wrapper>
        <MainContent>
          <Image />
          <TextContent>
            <Title>
              How to solve puzzles can make you a better cryptographer
            </Title>
            <Category>#technology</Category>
          </TextContent>
        </MainContent>
        <IconContent>
          <Icon
            name="dots-horizontal"
            size={appStyles.metrics.getWidthFromDP('8%')}
          />
        </IconContent>
      </Wrapper>
    </Container>
    <BottomLine />
  </Content>
);

export default FeaturedListItem;
