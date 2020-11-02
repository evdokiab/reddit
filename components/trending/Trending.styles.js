import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Title = styled.h1`
  font-size: 14px;
  padding: 11px 11px 23px 11px;
  font-weight: 700;
`;

export const Community = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 0px 8px 20px 12px;
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
  line-height: 6px;
  padding-left: 7px;
`;

export const CommunityTitle = styled.a`
  line-height: 16px;
  padding-bottom: 4px;
  :hover {
    text-decoration: underline;
  }
`;

export const Members = styled.span`
  color: #59595a;
`;
