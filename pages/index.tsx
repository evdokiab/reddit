import Trending from '../components/trending/Trending';
import request from '../modules/request';
import { AppWrapper, GlobalStyle } from '../styles/index.styles';

interface Community {
  title: string;
  url: string;
  members: number;
  image: string;
}

interface HomeProps {
  communities: Community[];
}
const Home = ({ communities }: HomeProps): JSX.Element => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Trending communities={communities} />
    </AppWrapper>
  );
};

// This function gets called at build time
export const getStaticProps = async (): Promise<unknown> => {
  // Call an external API endpoint to get communities

  const query = `{
        get {
          title
          url
          image
          members
        }
      }`;

  const communities = await request(query);

  // By returning { communities: communities }, the Home component
  // will receive `communities` as a prop at build time
  return {
    props: {
      communities
    }
  };
};

export default Home;
