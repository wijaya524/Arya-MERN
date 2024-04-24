import * as React from 'react';
import Input from "../input/Input";
import ButtonComponents from "../Button/index";
import Password from "../input/Password";
import { Link } from 'react-router-dom';
const FormRegister = () => {
  return (

    <form className=' items-center justify-center m-auto gap-6 grid rounded-xl my-[15vh]  pb-7'>
      <h1 className="text-start pointer-events-none text-slate-100 text-4xl font-bold">Register</h1>
      <h1 className="text-start pointer-events-none text-slate-300 "><i> Please create your account </i></h1>
      <Input type="email" id="email" outline="false" label="Email" />
      <Password label="Password"/>
      <Password label="Confirm Password"/>
      <ButtonComponents variant="contained" name="Create" />

      <span className='text-center text-sm text-slate-100'>Have an account?<Link to="/login" className=' text-blue-400'> Login</Link></span>
    </form>


  );
};

export default FormRegister;
