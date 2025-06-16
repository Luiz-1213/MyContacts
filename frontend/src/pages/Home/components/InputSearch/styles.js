import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    border: none;
    border-radius: 25px;
    height: 58px;
    background-color: #fff;
    box-shadow: 8px 4px 10px rgba(0, 0, 0 0.04);
    outline: 0;
    padding: 8px 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;
