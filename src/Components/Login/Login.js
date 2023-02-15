import React from 'react';
import Header from '../Header/header';
import './Login.css'

const LoginForm = () => {
  return (
    <>
    <Header />
    <div className='main'>
    <div className='bg'>
      <img src=''></img>
      <form className='Form'>
      <div className='box'>
      <h2 className='log'> Log in </h2>
          <div >
            <label className='mail1' htmlFor="email" >Email</label>
            <input className='Email1' id="email" type="text" placeholder='Type an Email'/>
          </div>
          <div className='password'>
            <label className='mail2' htmlFor="password">Password</label>
            <input className='Email2' id="password" type="password" placeholder='Type a Password'/>
          </div>
          <button className='btn'>
          <a  href='/add'>Submit</a>
          </button>
      </div>
    </form>
    </div>
    </div>
    </>
  );
};

export default LoginForm