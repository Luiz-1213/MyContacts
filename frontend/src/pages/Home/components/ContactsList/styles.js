import styled from 'styled-components';

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      margin-right: 8px;
      font-weight: bold;
    }

    img {
      transform: ${({ $orderBy }) =>
        $orderBy === 'ASC' ? 'rotate(180deg)' : 'rotate(0)'};
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px #0000000a;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  &:last-child {
    margin-bottom: 48px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background-color: ${({ $lightenColor }) => $lightenColor};
        color: ${({ $color }) => $color};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background-color: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
