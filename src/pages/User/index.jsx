import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Account from '../../components/Account'
import UpdateUserForm from './../../components/UpdateUserForm'
import {
  selectUserFirstName,
  selectUserLastName,
  selectToken,
} from './../../redux/Features/authSlice'
import './User.css'

const User = () => {
  const userFirstName = useSelector(selectUserFirstName)
  const userLastName = useSelector(selectUserLastName)
  const token = useSelector(selectToken)
  const navigate = useNavigate()

  const [isEditing, setIsEditing] = useState(false)

  // Redirection si l'utilisateur n'est pas authentifié
  useEffect(() => {
    if (!token) {
      navigate('/sign-in')
    }
  }, [token, navigate])

  const accounts = [
    {
      id: '1',
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
    },
    {
      id: '2',
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
    },
    {
      id: '3',
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
    },
  ]

  return (
    <div>
      <main className="main">
        <div className="header">
          {!isEditing ? (
            <>
              <h1>
                Welcome back, {userFirstName} {userLastName}!
              </h1>
              <button onClick={() => setIsEditing(true)} className="editButton">
                Edit Name
              </button>
            </>
          ) : (
            <>
              <h1>Edit User Info</h1>
              <UpdateUserForm
                currentFirstName={userFirstName}
                currentLastName={userLastName}
                onCancel={() => setIsEditing(false)}
              />
            </>
          )}
        </div>

        <h2 className="sr-only">Accounts</h2>
        {accounts.length > 0 ? (
          accounts.map((account) => (
            <Account
              key={account.id}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))
        ) : (
          <p className="noAccounts">No accounts available.</p>
        )}
      </main>
    </div>
  )
}

export default User
