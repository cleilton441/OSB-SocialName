import { makeStyles } from '@material-ui/core'
import { colors } from '_config/theme'

export const useStyles = makeStyles({

    box: {
        width: '100%',
        backgroundColor: colors.bgConfirmPassword,
        color: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.3)',
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 600,
    },

    content: {
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 14,
        height: 212,
    },
    typo:{
        fontWeight: 700,
    },

    txtautenticar: {
        fontSize: 13,
        fontStyle: 'normal',
        color: '#EFEFEF',
        marginTop: 12
    },

    boxfield: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 16,
        marginBottom: 16
    },

    fieldpass: {
        backgroundColor: '#656982',
        width: 45,
        height: 55,
        borderRadius: 3,


        "& .MuiInputBase-root": {
            color: 'white',
            height: 55,
            
        },

        "& .MuiOutlinedInput-input": {
            textAlign: 'center',
            fontSize: 35,
        }

    
    },

    footer: {
        display: 'flex',
         justifyContent: 'center',
         paddingBottom: 20

    },

    buttonup: {
        position: 'relative',
        marginTop: -30,
    },
    


})