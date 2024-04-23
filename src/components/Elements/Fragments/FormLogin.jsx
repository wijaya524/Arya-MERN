import * as React from 'react';
import Input from "../input/Input";
import ButtonComponents from "../Button/index";
import Password from "../input/Password";
import { Link } from 'react-router-dom';
const FormLogin = () => {
  return (

    <div className=' w-8/12 items-center justify-center ju m-auto gap-6 grid rounded-xl border-2 border-solid border-slate-600 bg-slate-800 pb-7'>
      <h1 className="text-center text-slate-100 text-4xl font-bold">Login</h1>
      <h1 className="text-start text-slate-300 mt-5 "><i>  Enter your email and password </i></h1>
      <Input type="email" id="email" outline="false" label="Email" />
      <Password label="Password"/>
      <ButtonComponents variant="contained" name="Login" />

      <span className=' text-sm text-slate-100'>Don't have an account?<Link to="/register" className=' text-blue-400'> Register</Link></span>
    </div>


  );
};

export default FormLogin;
