import React, { useState } from 'react'
import UserContext from './UserContext'

function UserProvider({ children }) {

  const [user, setUser] = useState({ username: '', auth: true })

  const login = (name) => {
    setUser((user) => ({
      name: name,
      auth: true
    }))
  }

  const logout = () => {
    setUser((user) => ({
      name: '',
      auth: false
    }))
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider