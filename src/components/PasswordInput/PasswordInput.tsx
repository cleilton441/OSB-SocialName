import React, { useState } from 'react'
import OtpInput from 'react-otp-input'
import './PasswordInput.scss'


export const PasswordInput : React.FC = () => {

    const [inputValue, setInputValue] = useState('')
    return (
       <OtpInput
        numInputs={4}
        separator={''}
        onChange={setInputValue}
        value={inputValue}
        isInputSecure
        className="inputstyle"
       />
    )
}