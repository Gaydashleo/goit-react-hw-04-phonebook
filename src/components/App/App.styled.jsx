import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 30px;
`;

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Titleh1 = styled.h1`
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: bold;
`;

export const Titleh2 = styled.h2`
  margin-bottom: 15px;
  font-size: 22px;
  font-weight: bold;
`;
