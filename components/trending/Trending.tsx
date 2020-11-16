import { useRouter } from 'next/router';
import React from 'react';

import { CommunityType } from '../../modules/types';
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

export interface TrendingProps {
  communities: CommunityType[];
}

const Trending = ({ communities }: TrendingProps): JSX.Element => {
  const router = useRouter();

  return (
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
          <Button
            text="JOIN"
            action={() => router.push(`/community/${title}`)}
          />
        </Community>
      ))}
    </Card>
  );
};
export default Trending;
