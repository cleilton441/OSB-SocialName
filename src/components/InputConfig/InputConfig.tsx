import React from 'react'
import { TextField, Typography } from '@material-ui/core'
import { useStyle } from './InputConfig.style'
import './InputConfig.scss'

export const InputConfig : React.FC = () => {
    const style = useStyle()
    return (
        <div className={style.InputConfig}>
            <span>
                <Typography className={style.label}>Como gostaria que a gente lhe chame</Typography>
            </span>
            <TextField
            id="InputConfig"
            variant="outlined" 
            placeholder={"Seu nome "} 
            className={style.input}  />
        </div>
    )
}