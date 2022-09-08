import React from 'react'
import Home from './components/home/Home'
import Signin from './views/Signin'
import { Route, Routes } from 'react-router-dom'
import CreateAccount from './views/CreateAccount'
import { AuthContextProvider } from './context/AuthContext'
import Zodiac from './components/Zodiac'
import Navbar from './components/Navbar'





export default function App() {
//   constructor(){
//     super();
//     this.state = {
//       age: 27,
//       user: {}
//     }
//   }

// logMeIn = (userObj) => {
//   this.setState({user: userObj})
// }
// logMeOut = (userObj) => {
//   this.setState({user: {}})
// };

// happybirthday = () => {
//   this.setState(
//     {age: this.state.age + 1}
//   )
// };






return (
<div>
 
  <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/signin' element={<Signin />} />
      <Route path='/createaccount' element={<CreateAccount />} />
      <Route path='/zodiac' element={<Zodiac/>} />
    </Routes>
  </AuthContextProvider>      
  </div>
   )
 }

    








