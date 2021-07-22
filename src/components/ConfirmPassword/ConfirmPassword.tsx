import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { useStyles } from './ConfirmPassword.style'
import { Button } from 'components/Button'
import { ButtonWithFloatingIcon } from 'components/ButtonWithFloatingIcon'
import { PasswordInput } from 'components/PasswordInput'
import { Close } from '@material-ui/icons'
import IconCheck from '_assets/img/IconCheck.svg'
import './ConfirmPassword.scss'
import Slide from '@material-ui/core/Slide'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'


export const ConfirmPassword : React.FC = () => {

    const ShowBool = useSelector((state: RootStateOrAny)=>{
        return state.showConfirm
    })

    const dispatch = useDispatch()
    const style = useStyles()
    return (
        <Slide direction="up" in={ShowBool} mountOnEnter unmountOnExit>
            <Box className={style.box}>

                <Box className={style.content}>
                    <Box className={style.header}>
                        <Typography>Digite a sua senha</Typography>
                        <Box className={style.buttonup}>
                            <Button
                            palette="secondary"
                            size="small"
                            startIcon={<Close color="primary" />}
                            onClick={()=> dispatch({type: "HIDDEN"})}
                            >
                            Fechar
                        </Button>
                    </Box>
                    </Box>
                    <Typography className={style.txtautenticar}>Para autenticar a operação</Typography>
                    <Box className={style.boxfield}>

                        <PasswordInput />
                        
                    </Box> 

                    <Box className={style.footer}>
                            <ButtonWithFloatingIcon size="medium" icon={IconCheck} onClick={()=>{ 
                                dispatch({type: "SHOWCOMPLETE"})
                                dispatch({type: 'HIDDEN' })
                            }}>
                                Confirmar
                            </ButtonWithFloatingIcon>
                    </Box>
                
                <Box>

                    </Box>
                </Box>
            </Box>
        </Slide>
    )
}