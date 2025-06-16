import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

export const StyledInput = styled.div`
  width: 100%;
  height: 52px;
  padding: 14px 52px 24px 16px;
  border: 2px solid #fff;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  color: #757575;
  transition: border-color 0.2s ease-in;

  ${({ theme, $focus }) =>
    $focus &&
    // eslint-disable-next-line no-undef
    css`
      border-color: ${theme.colors.primary.main};
    `}

  ${({ theme, $disabled }) =>
    $disabled &&
    css`
      background-color: ${theme.colors.gray[100]};
      border-color: ${theme.colors.gray[200]};
    `}
`;

export const ColorPreview = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${({ color }) => color};
  outline: 1px solid #ccc;
  z-index: 2;
`;

export const ColorInput = styled.input`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${({ color }) => color};
  outline: 1px solid #ccc;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
