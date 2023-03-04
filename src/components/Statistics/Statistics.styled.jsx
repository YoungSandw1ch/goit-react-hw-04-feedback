import styled from 'styled-components';

export const Item = styled.li`
  flex-basis: calc((100% - 45px) / 4);
  color: ${({ theme }) => theme.colors.greyFontColor};
  font-size: ${({ theme }) => theme.fontSizes.ms};
`;

export const MainItem = styled(Item)`
  margin-top: ${({ theme }) => theme.space[5]}px;
  flex-grow: 1;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.fistFontColor};
`;

export const MainSpan = styled.span`
  color: ${({ positivePercentage, theme }) => {
    if (positivePercentage <= 33) return theme.colors.red;
    if (positivePercentage >= 51) return theme.colors.green;
    if (positivePercentage > 33 && positivePercentage < 51)
      return theme.colors.orange;
  }};
`;
