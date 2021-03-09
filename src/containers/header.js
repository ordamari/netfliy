import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes'
import logo2 from '../logo2.png'

export function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo2} alt="Netfliy" />
                <Header.BottonLink to={ROUTES.SIGN_IN}>Sign In</Header.BottonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}


