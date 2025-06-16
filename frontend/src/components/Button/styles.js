import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  padding: 0 16px;
  height: 52px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background-color: #ccc !important;
    cursor: default !important;
  }

  ${({ theme, $danger }) =>
    $danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background-color: ${theme.colors.danger.light};
      }

      &:active {
        background-color: ${theme.colors.danger.dark};
      }
    `}
`;
