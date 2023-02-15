import React from 'react'
// import LoginForm from '../Login/Login'
import './header.css'
// import Expense from 'Components/Expense/Expense'
import Expense from '../Expense/Expense'

const Header = () => {
  return (
  <>
    <div className='Header_bar'>
      <a className='sp1' href='/'>
        <img className='sp2'src='https://plates.splitwise.com/images/splitwise-logo-bordered.png'></img>
      <h1 className='split'> Splitwise</h1>
      </a>
      {/* <button className='btn1' > Add an Expense</button> */}
      {/* <button className='btn2' onClick={onClickHandle} > Sign up</button> */}
      
      <a className='btn1' href='/login'>Sign up</a>
      <a className='btn2' href='/add'>   Add an Expense </a>
     </div>

  </>
   
   
  )
}

export default Header