import React from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import CreatePost from './Pages/CreatePost'
import Signup from './Pages/Signup'
import { useSelector } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import User from './Pages/User'
import OpenRoute from './components/OpenRoute'
import SearchBar from './Pages/SearchBar'
import ForgotPassword from './Pages/ForgotPassword'
import Error404 from './Pages/Error404'

function App() {
  const { isAuthenticate } = useSelector(state => state.auth);
  // console.log(isAuthenticate);
  return (
    <div className=''>
      {isAuthenticate && <Header />}
      <Routes>
        <Route path='/'
          element={
            isAuthenticate ?
              <PrivateRoute>
                <Home />
              </PrivateRoute>
              :
              <Login />
          }
        />
        <Route path='/register'
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>}
        />
        <Route path='/forgot-password'
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route path='/add'
          element={
            <PrivateRoute>
              <CreatePost />
            </PrivateRoute>}
        />
        <Route path='/user'
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>}
        />
        <Route path="search"
          element={
            <PrivateRoute>
              <SearchBar />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default App
