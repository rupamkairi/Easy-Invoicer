import React from 'react'

function TextField() {
  return (
    <div className="TextField">
      <div>
      <label>Text Field*</label>
      </div>
      <div>
      <input className="input-text-field">Value</input>
      </div>
      <span className="form-error">Error Text</span>
    </div>
  )
}

export default TextField
