import styled from 'styled-components';

interface CategoryProps {
  color?: string;
  withSeparator?: boolean;
}

export const Category = styled.h6<CategoryProps>`
  font-weight: 500;
  font-size: 11px;
  line-height: 12px;
  letter-spacing: 1px;
  color: ${(props) => (props.color ? `${props.color}` : '#000')};
  text-transform: uppercase;
  white-space: nowrap;

  &.withSeparator {
    position: relative;
    display: flex;
    align-items: center;
    margin: 0 8px;

    :before,
    :after {
      content: '';
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${(props) => (props.color ? `${props.color}` : '#000')};
    }

    :before {
      left: -40%;
    }

    :after {
      right: -40%;
    }
  }
`;
