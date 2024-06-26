import * as React from 'react';
import Input from "../input/Input";
import ButtonComponents from "../Button/index";
import Password from "../input/Password";
import { Link } from 'react-router-dom';
const FormLogin = () => {
  return (
  
    <form action='' method=''  className=' items-center justify-center my-[25vh] mx-auto gap-6 grid rounded-xl   pb-7'>
      <h1 className="text-start  pointer-events-none text-slate-100 text-4xl font-bold">Login</h1>
      <h1 className="text-start  pointer-events-none text-slate-300  "><i>  Enter your email and password </i></h1>
      <Input type="email" id="email" outline="false" label="Email" />
      <Password label="Password"/>
      <ButtonComponents variant="contained" name="Login" />
      <span className=' text-center text-sm text-slate-100'>Don't have an account?<Link to="/register" className=' text-blue-400'> Register</Link></span>
    </form>


  );
};

export default FormLogin;
