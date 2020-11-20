import { GetServerSideProps } from 'next';
import Image from 'next/image';

import { Header } from '../components/header/Header';
import { Navigation } from '../components/navigation/Navigation.styles';
import RedditImage from '../components/redditImage/RedditImage';
import Trending from '../components/trending/Trending';
import request from '../modules/request';
import { CommunityType } from '../modules/types';
import { AppWrapper, Content, Wrapper } from '../styles/index.styles';

export interface HomeProps {
  communities: CommunityType[];
}

const Home = ({ communities }: HomeProps): JSX.Element => {
  return (
    <AppWrapper>
      <Header />
      <Content>
        <Wrapper>
          <Image src="/logo.png" alt="Logo" width={500} height={500} />
          <div>
            <Trending communities={communities} />
            <Navigation href="/addCommunity">Add community</Navigation>
          </div>
        </Wrapper>
        <RedditImage
          src="/lionKing.jpg"
          width={700}
          height={700}
          title="Lion is here!"
        />
      </Content>
    </AppWrapper>
  );
};

// this function gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
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

  // by returning { communities: communities }, the Home component
  // will receive `communities` as a prop at build time
  return {
    props: {
      communities: response.data.get
    }
  };
};

export default Home;
