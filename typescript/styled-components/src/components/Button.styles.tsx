import styled from 'styled-components';

export const StyledButton = styled.button<{
  variant?: 'outline';
}>`
  border: 2px solid ${({ theme }) => theme.dark.primary};
  background-color: ${({ variant, theme }) =>
    variant === 'outline' ? 'transparent' : theme.dark.primary};
  color: ${({ variant, theme }) =>
    variant === 'outline' ? theme.dark.primary : 'white'};
  padding: 12px 24px;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const FancyButton = styled(StyledButton)`
  border: none;
  padding: 14px 26px;
  background-image: linear-gradient(109.6deg, #9cfcf8 11.2%, #6e7bfb 91.1%);
`;

export const SubmitButton = styled(FancyButton).attrs({
  type: 'submit',
})`
  background-image: linear-gradient(25deg, #d64c7f, #ee4758 50%);
`;
