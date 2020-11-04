import React from 'react';

import Button from '../button/Button';
import Card from '../card/Card';
import {
  Community,
  CommunityTitle,
  Details,
  Image,
  Info,
  Members
} from './Trending.styles';

interface Community {
  title: string;
  url: string;
  members: number;
  image: string;
}

interface TrendingProps {
  communities: Community[];
}

const Trending = ({ communities }: TrendingProps): JSX.Element => (
  <Card title="Trending Communities">
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
  </Card>
);

export default Trending;
