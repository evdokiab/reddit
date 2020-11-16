import { GetStaticPaths, GetStaticProps } from 'next';

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
import { AppWrapper, Content } from '../../styles/AddCommunity.styles';

export interface CommunityProps {
  community: CommunityType[];
}

const SingleCommunity = ({ community }: CommunityProps): JSX.Element => {
  return (
    <AppWrapper>
      <Header />
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

// this function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // call an external API endpoint to get communities
  const query = `{
    get {
      title
      url
      image
      members
    } 
  }`;

  const response = await request(query);
  const communities = await response.data.get;

  // get the paths we want to pre-render based on communities
  const paths = communities.map((community) => `/community/${community.title}`);

  // we'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// this also gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
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
