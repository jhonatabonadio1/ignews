import {
    HeaderContainer,
    HeaderContent,
    Nav,
    NavLink
} from './styles'

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src="/images/logo.svg" alt="ig.news" />
                <Nav>
                    <NavLink active>Home</NavLink>
                    <NavLink>Posts</NavLink>
                </Nav>
            </HeaderContent>
        </HeaderContainer>
    )
}