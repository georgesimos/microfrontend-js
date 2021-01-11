import { createStyles, LinearProgress, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    themselvesbar: {
      width: "100%",
      "& > * + *": { marginTop: theme.spacing(2) },
    },
  })
);
const Progress = () => {
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};

export default Progress;
