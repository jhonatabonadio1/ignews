import {
    HeaderContainer,
    HeaderContent,
    Nav,
    NavLink
} from './styles'

import Logo from '../../assets/images/logo.svg'

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <Logo />
                <Nav>
                    <NavLink active>Home</NavLink>
                    <NavLink>Posts</NavLink>
                </Nav>
            </HeaderContent>
        </HeaderContainer>
    )
}