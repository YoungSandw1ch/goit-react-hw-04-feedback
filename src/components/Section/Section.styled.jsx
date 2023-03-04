import styled from 'styled-components';

export const Partition = styled.section`
  width: ${({ theme }) => theme.sizes.section};
  padding: ${({ theme }) => theme.space[4]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: ${({ theme }) => theme.colors.autumnOrange.cotton};
  box-shadow: ${({ theme }) => theme.shadows.greyShadow};
  margin-left: auto;
  margin-right: auto;

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[4]}px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: ${({ theme }) => theme.space[5]}px;
`;
