import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

interface AvatarProps {
  size?: number;
}

export const Avatar = styled.img<AvatarProps>`
  width: ${props => props.size ? `${props.size}px` : '28px'};
  height: ${props => props.size ? `${props.size}px` : '28px'};
  border-radius: 50%;
  flex-shrink: 0;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.3px;
  color: #273240;
  white-space: nowrap;
`;
