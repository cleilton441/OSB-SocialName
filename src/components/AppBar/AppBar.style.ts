import { makeStyles } from '@material-ui/core'
import { theme } from '_config/theme'

const toolbarHeight = 48

export const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: toolbarHeight,

        [theme.breakpoints.down("sm")]: {
            height: toolbarHeight,
          },
    },

    logo: {
        height: '100%',
        width: '80px',
        borderRadius: '0px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
    }
})