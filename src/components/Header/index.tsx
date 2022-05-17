import {
    HeaderContainer,
    HeaderContent,
    Nav,
    NavLink
} from './styles'

import Logo from '../../assets/images/logo.svg'
import { SignInButton } from './SignInButton'

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <Logo />
                <Nav>
                    <NavLink active>Home</NavLink>
                    <NavLink>Posts</NavLink>
                </Nav>

                <SignInButton />
            </HeaderContent>
        </HeaderContainer>
    )
}