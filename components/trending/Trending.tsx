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
  Wrapper,
} from './Trending.styles';

const Trending = ({ communities }) => {
  return (
    <Wrapper>
      <Title>Trending Communities</Title>
      {communities.map((community) => (
        <Community key={community.title}>
          <Details>
            <Image src={community.image} />
            <Info>
              <CommunityTitle href={community.url}>
                {community.title}
              </CommunityTitle>
              <Members>{community.members} members</Members>
            </Info>
          </Details>
          <Button text="JOIN" />
        </Community>
      ))}
    </Wrapper>
  );
};

export default Trending;
