import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
    
  }
  padding-left: 10px;
  font-size: 14px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const Button = styled.button`
  margin-left: 20px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
`;
