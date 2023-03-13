import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 60%;
  height: auto;
  transition: all 0.3s ease-in 0ms;
  min-height: 300px;

  display: grid;
  border-collapse: collapse;
  grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr 0.25fr;
  grid-template-rows: auto;
  min-width: 400px;
  box-shadow: var(--box-shadow-1);

  thead,
  tbody,
  tr {
    display: contents;
    width: 100%;
  }

  th,
  td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  th {
    padding: 15px;
    position: sticky;
    text-align: center;
    height: 54px;
    top: 0;
    background: var(--color-blue-500);
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--color-white);
  }

  th:last-child {
    border: 0;
  }

  tbody {
    width: 100%;
    overflow-y: scroll;
  }

  tbody tr:nth-child(even) {
    background-color: #eee;
  }

  tbody th {
    background-color: #36c;
    color: #fff;
    text-align: left;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:last-of-type {
    border-bottom: 3px solid #383737;
  }

  td {
    padding-top: 5px;
    padding-bottom: 5px;
    height: 42px;
    color: var(--color-gray-600);
    text-align: center;
    line-height: 2;
  }

  tr:nth-child(even) td {
    background: var(--color-blue-100);
  }
`;
