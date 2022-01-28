import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Avatar = styled.img`
  width: 20px;
  height: 20px;
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
