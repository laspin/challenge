import styled from 'styled-components';

export const Button = styled.button`
  color: var(--color-red-500);
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid var(--color-red-700);
  border-radius: 3px;
`;

export const GraphContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  height: 100%;
  margin: 4rem 0;
  h1 {
    display: flex;
    justify-content: center;
  }
`;

export const ChartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  label {
  }
`;

export const Chart = styled.div`
  grid-column: 1 / -1;
  border: 1px solid #ddd;
  padding: 1rem;
  height: auto;
  max-height: 534px;
`;
