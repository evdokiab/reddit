import { GetStaticProps } from 'next';

import { Navigation } from '../components/navigation/Navigation.styles';
import Trending from '../components/trending/Trending';
import request from '../modules/request';
import { CommunityType } from '../src/types';
import { AppWrapper, GlobalStyle } from '../styles/index.styles';

export interface HomeProps {
  communities: CommunityType[];
}

const Home = ({ communities }: HomeProps): JSX.Element => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Trending communities={communities} />
      <Navigation href="/addCommunity">Add community</Navigation>
    </AppWrapper>
  );
};

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get communities

  const query = `{
    get {
      title
      url
      image
      members
    } 
  }`;

  const data = await request(query);

  // By returning { communities: communities }, the Home component
  // will receive `communities` as a prop at build time
  return {
    props: {
      communities: data.get
    }
  };
};

export default Home;
