import Image from 'next/image';

import Card from '../card/Card';

interface RedditImageProps {
  src: string;
  width: number;
  height: number;
  title: string;
}

const RedditImage = ({
  src,
  width,
  height,
  title
}: RedditImageProps): JSX.Element => {
  return (
    <Card title={title} width={width} height={height}>
      <Image src={src} width={width} height={height} />
    </Card>
  );
};
export default RedditImage;
