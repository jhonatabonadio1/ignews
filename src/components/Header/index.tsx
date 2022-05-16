import {
    HeaderContainer,
    HeaderContent,
    Nav,
    NavLink
} from './styles'

import logo from '../../assets/images/logo.svg'

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} />
                <Nav>
                    <NavLink active>Home</NavLink>
                    <NavLink active>Posts</NavLink>
                </Nav>
            </HeaderContent>
        </HeaderContainer>
    )
}