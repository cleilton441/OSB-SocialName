import React from 'react'
import { Button } from 'components/Button'
import { useStyles } from './FooterButtons.style'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'
import { useDispatch } from 'react-redux'

export const FooterButtons : React.FC = () =>{
    const dispatch = useDispatch()
    const style = useStyles()
    return (
        <div className={style.buttonsWrapper}>
            <Button palette="secondary" onClick={()=> console.log("Voltar")} startIcon={ <KeyboardArrowLeft color="primary" radius={20}/>} >
                Voltar
            </Button>

            <Button palette="primary" onClick={() => dispatch({type: "SHOW"})} endIcon={ <KeyboardArrowRight color="secondary" /> }>
                Próximo
            </Button>
        </div>
    )
}