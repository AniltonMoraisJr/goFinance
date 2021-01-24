import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        position: relative;
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &.selected {
          &:before {
            content: '';
            position: absolute;
            width: 73px;
            height: 2px;
            top: calc(100% + 10px);

            /* Orange */

            background: #ff872c;
          }
        }
        &:not(.selected) {
          opacity: 0.6;
        }
      }
    }
  }
`;
