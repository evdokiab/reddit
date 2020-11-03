import { ReactNode } from 'react';

import { Title, Wrapper } from './Card.styles';

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: CardProps): JSX.Element => (
  <Wrapper>
    <Title>{title}</Title>
    {children}
  </Wrapper>
);

export default Card;
