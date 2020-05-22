import React from 'react'
import '../css/LandingHeader.css'
import Logo from "../img/igotchu-darkblue.png";


export const LandingHeader = () => {
  return (
    <header>
      <img src={Logo} alt=""/>
      <a href="/login"> <button type="button">LOGIN</button> </a>
      <a href="/newsfeed"> <button type="button">NewsFeed</button> </a>
      <a href="/profile"> <button type="button">Profile</button> </a>
      <a href="/itempage"> <button type="button">Items</button> </a>
    </header>
  )
}
