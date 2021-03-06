import React from 'react'
import HeaderLink from './header-link'

const SignedIn = () => {
  return (
    <ul className="inline-flex items-center">
      <HeaderLink href="/profile">Profile</HeaderLink>
      <HeaderLink href="/user">Directory</HeaderLink>
      <HeaderLink href="/api/logout">Logout</HeaderLink>
    </ul>
  )
}

export default SignedIn
