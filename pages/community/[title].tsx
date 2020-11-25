import { GetServerSideProps } from 'next';

import Card from '../../components/card/Card';
import { Header } from '../../components/header/Header';
import {
  Community,
  CommunityTitle,
  Details,
  Image,
  Info,
  Members
} from '../../components/trending/Trending.styles';
import request from '../../modules/request';
import { CommunityType } from '../../modules/types';
import { AppWrapper, Content, Div } from '../../styles/AddCommunity.styles';

export interface CommunityProps {
  community: CommunityType[];
}

const SingleCommunity = ({ community }: CommunityProps): JSX.Element => {
  return (
    <AppWrapper>
      <Header />
      <Div />
      <Content>
        <Card title="Community">
          {community.map(({ title, url, members, image }) => (
            <Community key={title}>
              <Details>
                <Image src={image} />
                <Info>
                  <CommunityTitle href={url}>{title}</CommunityTitle>
                  <Members>{members} members</Members>
                </Info>
              </Details>
            </Community>
          ))}
        </Card>
      </Content>
    </AppWrapper>
  );
};

// this function gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // params contains the community `title`.
  // if the route is like /community/test, then params.title is test

  const query = `{
    get(query: {title: "${params.title}"}) {
      title
      url
      image
      members
    }
  }
  `;

  const response = await request(query);
  const community = await response.data.get;

  // pass community data to the page via props
  return { props: { community } };
};

export default SingleCommunity;
