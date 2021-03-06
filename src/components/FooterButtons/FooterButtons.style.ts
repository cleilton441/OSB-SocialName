import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  buttonsWrapper: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 20,



    "& .MuiButton-root": {
      minWidth: 136,
      borderRadius: 10,
    },

    "& .MuiButton-label": {
      display: "block",
      position: "relative",
    },

    "& .MuiButton-startIcon, & .MuiButton-endIcon": {
      display: "block",
      position: "absolute",
    },
    "& .MuiButton-startIcon": {
      top: 0,
      left: 0,
      marginRight: 8,
    },
    "& .MuiButton-endIcon": {
      marginLeft: 8,
      top: 0,
      right: 0,
    },
  },
  imgconc:{
    marginTop: 3,
    width: 14,
    height: 8,
  },
  back:{
    marginLeft: 30,
    marginBottom: 4,
    width: 32,
    height: 14,
  },
});