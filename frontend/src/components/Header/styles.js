/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
`;

export const NavBar = styled.nav`
  width: 100%;
  margin-top: 24px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  gap: 48px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding-bottom: 12px;
  border-bottom: 4px solid transparent;
  transition: all 0.2s ease-in;

  &.active {
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`;
