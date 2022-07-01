import styled from 'styled-components';

export const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    gap: 24px;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 50px;
`;
