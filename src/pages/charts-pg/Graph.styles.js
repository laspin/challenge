import styled from 'styled-components';

export const GraphContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  height: 100%;
  margin: 4rem 0;
  h2 {
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
  box-shadow: var(--box-shadow-1);
  padding: 1rem;
  height: auto;
  max-height: 534px;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 30%;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

export const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  box-shadow: var(--box-shadow-4);
  border-radius: 0.25rem;
  background-color: #fff;
  color: #333;
  cursor: pointer;

  img {
    position: absolute;
    right: 0;
  }
`;

export const Option = styled.option`
  font-size: 1rem;
  background-color: #fff;
  color: #333;
`;

export const Button = styled.button`
  border-radius: 3px;
  margin: 3rem 0;
  width: 100%;
  background: var(--color-red-500);
  box-shadow: var(--box-shadow-4);
  color: var(--color-white);
  padding: 10px 20px;
  display: flex;
  height: 43px;
  justify-content: center;
  font-size: var(--font-size-text);
`;
