import styled from 'styled-components'

export const Button = styled.button`
    height: 4rem;
    width: 260px;
    border: 0;
    border-radius: 2rem;
    background-color: ${({theme}) => theme.colors.yellow_500};
    color: ${({theme}) => theme.colors.gray_900};
    font-size: 1.25rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8)
    }
`;