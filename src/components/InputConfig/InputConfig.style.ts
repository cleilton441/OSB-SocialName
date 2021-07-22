import { makeStyles } from '@material-ui/core'
import { textColors } from '_config/theme'

export const useStyle = makeStyles({
    input: {
        width: '100%'

    },

    InputConfig: {
        width: '100%',
        marginTop: 10,
        padding: 1,
    },

    label: {
        marginLeft: 8,
        fontWeight: 600,
        fontSize: 11,
        color: textColors.gray
    },
})