import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 750px;
  height: auto;
  padding: 1rem;
  box-shadow: var(--box-shadow-4);
  align-content: center;
  justify-content: center;
  margin: 0;

  fieldset {
    box-shadow: var(--box-shadow-4);
    background-color: var(--color-blue-100);
    border: 1px solid var(--color-slate-500);
    border-radius: 4px;
    margin: 0;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 100px auto 20px;
    gap: 15px 0;
    legend {
      font-size: var(--font-size-medium);
      color: var(--color-blue-500);
      font-weight: 500;
    }
    input[type='checkbox'] {
      display: inline-flex;
      box-sizing: border-box;
      width: 25px;
      border-radius: 4px;
      border: 1px solid var(--color-gray-200);
      height: 25px;
    }
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 40px;
  margin-bottom: 2rem;
  font-size: var(--font-size-small);
`;

export const CheckboxFormBtn = styled.button`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-gray-100);
  border-radius: 4px;
  font-weight: 300;
  box-shadow: var(--box-shadow-4);
  font-size: var(--font-size-text);
  letter-spacing: 1px;
  background: var(--color-red-500);
  color: var(--color-white);
  padding: 10px 40px;
  cursor: pointer;
`;

export const CheckboxFormTop = styled.section`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  label {
    width: 50%;
    color: var(--color-gray-800);
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    height: 50px;
    justify-content: space-between;
  }
`;

export const CheckboxFormBottom = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
  label {
    display: flex;
    flex-direction: column;
    height: 50px;
    color: var(--color-gray-800);
    justify-content: center;
    margin: 1rem 0 2rem;
  }
`;
