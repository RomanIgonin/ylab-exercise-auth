import styled from 'styled-components';

export const InputWrap = styled.div`
  position: relative;
`;

export const Error = styled.div`
  margin-left: 24px;
`;

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.4);
  height: 44px;
  border-radius: 10px;
  border-width: 0;
  width: 400px;
  padding: 0 24px;
  outline: none;
  margin-top: 4px;

  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${props => (props.color === 'dark' ? `#303030` : `#FFFFFF`)};
`;

export const TextArea = styled.textarea`
  background-color: #f5f5f5;
  border-radius: 10px;
  border-width: 0;
  width: 400px;
  padding: 10px 24px;
  outline: none;
  margin-top: 4px;
  resize: none;

  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${props => (props.color === 'dark' ? `#303030` : `#FFFFFF`)};
`;
