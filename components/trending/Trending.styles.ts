import styled from 'styled-components';

import { black, textMembers, white } from '../../modules/colors';

export const Community = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${white};
  padding: 0px 8px 20px 12px;
  max-width: 300px;
`;

export const Details = styled.div`
  display: flex;
`;

export const Image = styled.img`
  border-radius: 100%;
  height: 32px;
  width: 32x;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 12px;
  line-height: 8px;
  margin: 0px 7px;
`;

export const CommunityTitle = styled.a`
  line-height: 16px;
  padding-bottom: 4px;
  text-decoration: none;
  color: ${black};
  :hover {
    text-decoration: underline;
  }
`;

export const Members = styled.span`
  color: ${textMembers};
`;
