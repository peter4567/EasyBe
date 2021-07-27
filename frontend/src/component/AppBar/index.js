import React,{Fragment} from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";

const marginLeft = 100;
const drawerWidth = 13.5;

const useStyles = makeStyles(theme => ({

    appBar: {
        width: `calc(100% - ${drawerWidth}em)`,
        marginLeft: marginLeft,
        marginRight: "0.5em",
        marginTop: "0.9em",
        marginBottom: "1em",
        height: "7em"
    },
    title:{
        fontWeight: "bold"
    },
    backgroundStyle: {
        boxShadow: "none"
    }
}))
function Try(props) {
    const classes = useStyles()
    return (
        <Fragment>
            <Hidden mdDown>
                <AppBar position="fixed" className={classes.appBar} color="secondary" classes={{root: classes.backgroundStyle}}>
                    <Toolbar>
                        <Typography variant="h6" noWrap className={classes.title}>
                            Permanent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Hidden>

        </Fragment>
    );
}

export default Try;