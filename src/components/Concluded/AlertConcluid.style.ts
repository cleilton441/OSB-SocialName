import { makeStyles } from '@material-ui/core'

export const useStyle = makeStyles({
    box: {
        backgroundColor: '#F2F2F2',
        position: 'absolute', 
        height: '30%',
        zIndex: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 57,
    },

    txtconcluido: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    imgconc: {
        width: '100%'
    }
})