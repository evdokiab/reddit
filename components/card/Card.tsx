import { ReactNode } from 'react';

import { Title, Wrapper } from './Card.styles';

interface CardProps {
  title: string;
  width?: number;
  height?: number;
  children: ReactNode;
}

const Card = ({ title, width, height, children }: CardProps): JSX.Element => (
  <Wrapper width={width} height={height}>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default Card;
