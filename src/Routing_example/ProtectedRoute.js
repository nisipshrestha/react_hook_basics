import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = ({ isAuthorized, path, exact, component }) => {
    return isAuthorized ? (
        <Route path={path} exact={exact} component={component} />
    ) : <Redirect to='/unauthorized' />
}

export default ProtectedRoute