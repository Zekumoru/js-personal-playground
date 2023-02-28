import styled from 'styled-components';

export const StyledButton = styled.button<{
  variant?: 'outline';
}>`
  border: 2px solid #18191a;
  background-color: ${({ variant }) =>
    variant === 'outline' ? 'transparent' : '#18191a'};
  color: ${({ variant }) => (variant === 'outline' ? '#18191a' : 'white')};
  padding: 12px 24px;
  border-radius: 2px;
  font-size: 1.2rem;
  cursor: pointer;
`;
