import styled, {css} from 'styled-components'

interface NavLink{
    active?: boolean;
}

export const HeaderContainer = styled.header`
    height: 5rem;
    border-bottom: 1px solid ${({theme}) => theme.colors.gray_800};
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
`;

export const Nav = styled.div`
    margin-left: 5rem;
    height: 5rem;
`;

export const NavLink = styled.a<NavLink>`
    display: inline-block;
    position:relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: ${({theme}) => theme.colors.gray_300};
    transition: color 0.2s;

    & + a{
        margin-left:2rem;
    }

    &:hover{
        color: ${({theme}) => theme.colors.white};
    }
    
    ${({theme, active}) => active && css`
        color: ${({theme}) => theme.colors.white};
        font-weight: bold;

        &:after{
            content: '';
            height:3px;
            border-radius: 3px 3px 0 0;
            width:100%;
            position: absolute;
            bottom:1px;
            left:0;
            background-color: ${({theme}) => theme.colors.yellow_500};
        }
    `}
`;