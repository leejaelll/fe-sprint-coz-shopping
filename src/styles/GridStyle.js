import { styled } from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.2rem;
`;

export const GridItem = styled.div`
  grid-column: span 3;
`;
