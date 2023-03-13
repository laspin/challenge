import styled from 'styled-components';

export const TeamContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 2rem 0;
    text-align: center;
  }
  strong {
    color: var(--color-red-500);
    font-weight: 500;
  }
`;

export const CreateForm = styled.form`
  width: 100%;
  height: 65vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, auto);
  gap: 20px;
  span {
    font-size: var(--font-size-small);
  }
`;

export const InputGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  input {
    padding: 15px 20px;
    box-shadow: var(--box-shadow-1);
    width: 100%;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    outline: none;
    //margin-bottom: 2rem;
    border: 1px solid var(--color-gray-300);
  }
  label {
    background: var(--color-blue-500);
    color: var(--color-white);
    padding: 5px;
    display: block;
  }
  textarea {
    border-radius: 3px;
    height: 110px;
    border: 1px solid var(--color-gray-300);
    margin-bottom: 2rem;
  }
`;
export const CreateBtn = styled.button`
  border-radius: 3px;
  margin: 2rem 0 0;
  background: var(--color-red-500);
  color: var(--color-white);
  padding: 10px 58px;
  box-shadow: var(--box-shadow-4);
  font-size: var(--font-size-text);
`;
