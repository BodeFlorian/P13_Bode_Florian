import React from 'react'
import PropTypes from 'prop-types'
import './Account.css'

const Account = ({ title, amount, description }) => {
  return (
    <section className="account" aria-label={`Account section for ${title}`}>
      <div className="accountContentWrapper">
        <h3 className="accountTitle">{title}</h3>
        <p className="accountAmount" aria-live="polite">
          {amount}
        </p>
        <p className="accountAmountDescription">{description}</p>
      </div>
      <div className="accountContentWrapper cta">
        <button
          className="transactionButton"
          onClick={() => alert('Feature coming soon!')}
        >
          View transactions
        </button>
      </div>
    </section>
  )
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Account
