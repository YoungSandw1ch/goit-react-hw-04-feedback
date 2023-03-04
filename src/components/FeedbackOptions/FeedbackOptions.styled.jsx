import styled from 'styled-components';
import { ImHappy, ImSad, ImNeutral } from 'react-icons/im';

const colorChanger = name => {
  if (name === 'good') return 'green';
  if (name === 'neutral') return 'orange';
  if (name === 'bad') return 'red';
};

export const Button = styled.button`
  display: flex;
  align-items: center;

  font-size: 50px;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.buttonGrey};
  border: none;
  border-radius: ${({ theme }) => theme.radii.round};

  cursor: pointer;
  outline: none;
  transition: transform 250ms linear;

  :focus,
  :hover {
    transform: scale(1.06);
    color: ${props => colorChanger(props.name)};
  }
`;

export const Good = styled(ImHappy)`
  color: currentColor;
`;
export const Neutral = styled(ImNeutral)`
  color: currentColor;
`;
export const Bad = styled(ImSad)`
  color: currentColor;
`;
