import React from 'react'
import Header from './Components/Header/header'
import Main from './Components/Main/main'
import LoginForm from './Components/Login/Login'
import Home from './Components/Home/Home'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Expense from './Components/Expense/Expense'


const App = () => {
  return (
    // <div>
    //   <Header />
    //   <Main />
    //   <Home />
    //   <LoginForm />
    //  </div>
    <Router>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Expense/>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/add" element={<Expense/>}></Route>
        
      </Routes>

</Router>
  )
}

export default App