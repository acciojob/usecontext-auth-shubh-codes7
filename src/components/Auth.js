import {useContext} from 'react'
import {AuthContext} from './App.js'
import React from 'react'

export default function Auth(){
    const flag = useContext(AuthContext)
    return(
        <p className="authText">
            {flag ? "You are now authenticated, you can proceed" : "you are not authenticated"}
        </p>
    )
}