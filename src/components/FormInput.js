import "./FormInput.css";

import React from 'react'

export default function FormInput() {
    const {label,onChange,id, ...inputProps}=props;
  return (
    <div className="formInput">
        <label>{label}</label>
        <input{...inputProps} onChange={onChange}/>
      
    </div>
  )
}
