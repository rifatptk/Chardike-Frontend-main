import React from 'react'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'

const Header = () => {
  return (
    <header className="fixed-top">
        <div className="container ">
        <HeaderTop/>
        <HeaderMiddle/>
        </div>
    </header>
  )
}

export default Header