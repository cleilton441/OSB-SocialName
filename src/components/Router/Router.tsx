import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AccountRoutes } from 'features/account/constants/routes'
import { SocialName } from 'features/account/pages/SocialName'

export const Router : React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={AccountRoutes.socialname} component={SocialName} />
            </Switch>
        </BrowserRouter>
    )
}