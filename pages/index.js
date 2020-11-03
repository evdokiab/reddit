import Trending from '../components/trending/Trending';
import { AppWrapper, GlobalStyle } from '../styles/index.styles';

const communities = [
  {
    title: 'r/2healthbars',
    url: '/r/2healthbars/',
    members: 43435,
    image:
      'https://b.thumbs.redditmedia.com/wfMQH0QKgTSzvmDB4RYx1wahC3S6eeJ2i5fPGdS2PjM.png',
  },
  {
    title: 'r/AZCardinals',
    url: '/r/AZCardinals/',
    members: 61551,
    image:
      'https://a.thumbs.redditmedia.com/aUs1CRmUFuvBuMgzpFGFH7z1XCulN142lmz2hfCXKe0.png',
  },
];

const Home = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Trending communities={communities} />
    </AppWrapper>
  );
};

export default Home;
