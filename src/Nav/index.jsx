import React, { Component } from 'react'
import 'bulma'
import './style.css'

class Nav extends Component {
  render () {
    return (
      <header className='has-navbar-fixed-top'>
        <nav className='navbar is-fixed-top'>

          <div className='navbar-brand'>
            <a href='#home'>
              <img id='winson-logo' src='https://i.imgur.com/xFKk3Cf.png' />
            </a>
            <a
              role='button'
              class='navbar-burger burger nav-toggle'
              aria-label='menu'
              aria-expanded='false'
              id='nav-toggle'
              onClick={
                () => {
                  let toggle = document.querySelector('.nav-toggle')
                  let menu = document.querySelector('.navbar-menu')
                  toggle.classList.toggle('is-active')
                  menu.classList.toggle('is-active')
                }}
            >
              <span aria-hidden='true' />
              <span aria-hidden='true' />
              <span aria-hidden='true' />
            </a>
            <div className='navbar-menu' id='nav-menu'>
              <div className='navbar-start'>
                <a
                  className='navbar-item'
                  href='#about'
                >
                About
                </a>
                <a
                  className='navbar-item'
                  href='#menu'
                >
                Menu
                </a>
                <a
                  className='navbar-item'
                  href='#reservations'
                >
                Reservations
                </a>
                <a
                  className='navbar-item'
                  href='#press'
                >
                Press
                </a>
                <a
                  className='navbar-item'
                  href='#contact'
                >
                Contact
                </a>
              </div>
            </div>
            <div className='navbar-end'>
              <div className='navbar-item' />
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav
