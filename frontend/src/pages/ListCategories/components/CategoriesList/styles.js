import styled from 'styled-components';

export const Card = styled.div`
  margin-top: 16px;
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
    .category-name {
      display: flex;
      align-items: center;

      .category-color {
        border-radius: 50%;
        height: 12px;
        width: 12px;
        background-color: ${({ $color }) => $color};
        margin-right: 8px;
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
