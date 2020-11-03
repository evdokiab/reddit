import React from 'react';

import Button from '../button/Button';
import {
  Community,
  CommunityTitle,
  Details,
  Image,
  Info,
  Members,
  Title,
  Wrapper
} from './Trending.styles';

const Trending = ({ communities }) => (
  <Wrapper>
    <Title>Trending Communities</Title>
    {communities.map(({ title, url, members, image }) => (
      <Community key={title}>
        <Details>
          <Image src={image} />
          <Info>
            <CommunityTitle href={url}>{title}</CommunityTitle>
            <Members>{members} members</Members>
          </Info>
        </Details>
        <Button text="JOIN" />
      </Community>
    ))}
  </Wrapper>
);

export default Trending;
