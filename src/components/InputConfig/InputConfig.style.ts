import { makeStyles } from '@material-ui/core'
import { textColors } from '_config/theme'

export const useStyle = makeStyles({
    input: {
        width: '99%'

    },

    InputConfig: {
        width: '100%',
        marginTop: 30,
    },

    label: {
        marginLeft: 8,
        fontWeight: 600,
        fontSize: 12,
        color: textColors.gray
    },
})