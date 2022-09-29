import styled from 'styled-components';

export const Form = styled.form`
  max-width: 400px;
  border-radius: 5px;
  
  padding: 10px;
 box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 360px;
  margin-top: 2px;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
`;

export const Button = styled.button`
  cursor: pointer;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.75);
`;
