import React from 'react'
import OtpInput from 'react-otp-input'
import './PasswordInput.scss'


export const PasswordInput : React.FC = () => {
    const [inputValue, setInputValue] = React.useState('')
    const handlePassword = (e: string) => {
        const reg = /[0-9]/g;
        e = e.replaceAll(reg, '*')
        setInputValue(e)
    }
    return (
       <OtpInput
        numInputs={4}
        separator={''}
        onChange={(e : string) => handlePassword(e)}
        value={inputValue}
        className="inputstyle"
        isInputNum
       />
    )
}