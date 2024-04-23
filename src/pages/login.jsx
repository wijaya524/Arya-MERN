import React from 'react'
import Layouts from '../components/layouts/AuthLayouts'
import Input from '../components/Elements/input/Input'
import ButtonComponents from '../components/Elements/Button'

const LoginPage = () => {
    return (
       <Layouts title="Login">
         <Input type="email" id="email" outline="true" label="Email"/>
         <Input  type="password" id="password" outline="true"  label="Password" />
         <ButtonComponents variant="contained" name="Login"/>
       </Layouts>
    )
}

export default LoginPage