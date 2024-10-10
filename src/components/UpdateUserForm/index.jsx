import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectToken, updateUser } from './../../redux/Features/authSlice'
import './UpdateUserForm.css'

const UpdateUserForm = ({ currentFirstName, currentLastName, onCancel }) => {
  const dispatch = useDispatch()
  const token = useSelector(selectToken)

  const [firstName, setFirstName] = useState(currentFirstName)
  const [lastName, setLastName] = useState(currentLastName)

  const handleUpdateName = (e) => {
    e.preventDefault()
    if (token) {
      dispatch(updateUser({ token, firstName, lastName }))
      onCancel()
    }
  }

  return (
    <form onSubmit={handleUpdateName} className="form">
      <div className="inputGroup">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="buttonGroup">
        <button type="submit" className="saveButton">
          Save
        </button>
        <button type="button" onClick={onCancel} className="cancelButton">
          Cancel
        </button>
      </div>
    </form>
  )
}

export default UpdateUserForm
