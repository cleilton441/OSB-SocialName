import React from 'react'
import { useStyles } from './AppBar.style'
import { AppBar as MuiAppBar, Toolbar, Box } from '@material-ui/core'
import logo from '_assets/img/logo.svg'
import cancel from '_assets/img/Close.svg'
import { Button } from 'components/Button'
export const AppBar : React.FC = () => {

    const styles = useStyles()
    return (
        <MuiAppBar color="primary" position="relative">
            <Toolbar className={styles.toolbar}>   
                <Box className={styles.logo}>
                    <img src={logo} alt="logo" />
                </Box>
                <Button
                palette="secondary"
                size="small"
                startIcon={<img src={cancel} alt="cancel"/>}
                onClick={()=> console.log("Cancelar")}
              >
                Cancelar
              </Button>

            </Toolbar>
        </MuiAppBar>
    )
}