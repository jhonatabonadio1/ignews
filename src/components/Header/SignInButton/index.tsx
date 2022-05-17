import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

import {
    Button
} from './styles'

export function SignInButton(){

    const isUserLoggedIn = false

    return isUserLoggedIn ? (
        <Button type="button">
            <FaGithub color="#04D361" />
            Jhonata Bonadio
            <FiX color="#737380" className="closeIcon"/> 
        </Button>
    ) : (
        <Button type="button">
            <FaGithub color="#EBA417" />
            Sign in with Github
        </Button>
    )
}