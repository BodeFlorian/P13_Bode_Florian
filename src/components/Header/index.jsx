import React, { useEffect } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  logout as logoutAction,
  selectUserFirstName,
  selectToken,
} from './../../redux/Features/authSlice'
import logo from '../../assets/img/argentBankLogo.webp'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const firstName = useSelector(selectUserFirstName)
  const token = useSelector(selectToken)

  useEffect(() => {}, [firstName, token])

  const handleSignOut = () => {
    dispatch(logoutAction())
    navigate('/')
  }

  return (
    <header className="mainNav">
      <Link to="/" className="mainNavLogo">
        <img className="mainNavLogoImage" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <Link className="mainNavItem" to="/user">
              <FontAwesomeIcon
                icon={faUserCircle}
                className="mainNavItemIcon"
              />
              {firstName}
            </Link>
            <button
              type="button"
              className="mainNavItem"
              onClick={handleSignOut}
            >
              <FontAwesomeIcon icon={faSignOut} className="mainNavItemIcon" />
              Sign Out
            </button>
          </>
        ) : (
          <Link className="mainNavItem" to="/sign-in">
            <FontAwesomeIcon icon={faUserCircle} className="mainNavItemIcon" />
            Sign In
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
