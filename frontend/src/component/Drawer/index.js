import React, {Fragment, useState} from 'react';
import {Drawer} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/styles/useTheme";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {BrowserRouter,Link} from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton";

import easybeLogo from "../../assets/EasyBe.png";
import {Dashboard} from "@material-ui/icons";
import TitleBar from "../AppBar";
import Typography from "@material-ui/core/Typography";



function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
const useStyles = makeStyles(theme =>({
    drawerBackground: {
        backgroundColor: theme.palette.primary.main,
        width: "12.5rem"

    },
    toolbar: theme.mixins.toolbar,
    userId: {
        marginTop: "1rem",
        height: "4rem",
        width: "100%",
        backgroundColor: "#131111",
        color: "white"

    },
    drawerItem: {
        color: "white",
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }

    },
    menuTitle: {
        fontSize: "17px",
        color: "#878787",
        marginTop: "1rem",
        marginLeft: "auto",
        marginRight: "auto"

    },
    appBar:{
        zIndex: theme.zIndex.modal + 1
    },
    logoContainer:{
        maxWidth: "1px",
        "&:Hover": {
            backgroundColor: "Transparent"
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "Transparent"
        }
    },
    drawerIcon: {
        color: "white",
        height: "50px",
        width: "50px",

    },
    drawerMargin:{
        marginBottom: "3.5em"
    },
    LogoImage:{
        height: "2.1rem",
        marginLeft: "8.5rem"

    },
    easybeLogo:{
        marginTop: "1.2rem",
        marginBottom: "0.3rem"
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(10),
        paddingRight: theme.spacing(0.5),
        paddingLeft: theme.spacing(25),
    }

}))

function AppDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


    const [openMobileDrawer, setOpenMobileDrawer] = useState();

    const routes = [
        {name: "Dashboard", icon: <ListItemIcon ><DashboardIcon/></ListItemIcon>},
        {name: "Team", icon: <ListItemIcon><GroupIcon/></ListItemIcon>},
        {name: "Project", icon:<ListItemIcon><AccountTreeIcon/></ListItemIcon>},
        {name: "Analytics", icon: <ListItemIcon><TimelineIcon/></ListItemIcon>},
    ]

    const permanentDrawer = (
        <Drawer
            variant="permanent"
            anchor="left"
            classes={{paper: classes.drawerBackground}}
            className={classes.drawerPadding}

        >
            <img className={classes.easybeLogo} src={easybeLogo} alt="easybe logo"/>

            <div className={classes.userId} ></div>
            <div className={classes.menuTitle}>Menu</div>
            <List disablePadding>
                {routes.map((route, index) => (
                    <ListItem button className={classes.drawerItem} key={index}>
                        {route.icon}
                        <ListItemText >{route.name}</ListItemText>
                    </ListItem>
                ))}

            </List>

        </Drawer>
    )
    const mobileDrawer=(
        <Fragment>



            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                anchor="left"
                classes={{paper: classes.drawerBackground}}
                className={classes.drawer}
                open={openMobileDrawer}
                onClose={() => setOpenMobileDrawer(false)}
                onOpen={() => setOpenMobileDrawer(true)}

            >
                <div className={classes.drawerMargin}/>
                {/*<img src={easybeLogo} alt="easybe logo"/>*/}

                <div className={classes.userId} ></div>
                <div className={classes.menuTitle}>Menu</div>
                <List disablePadding>
                    {routes.map((route, index) => (
                        <ListItem button className={classes.drawerItem} key={index}>
                            {route.icon}
                            <ListItemText >{route.name}</ListItemText>
                        </ListItem>
                    ))}


                </List>

            </SwipeableDrawer>

            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenMobileDrawer(!openMobileDrawer)}
                disableRipple

            >
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </Fragment>
    )
    return (
        <div>
            <TitleBar/>
            {matches ? <ElevationScroll>
                <AppBar position="fixed" className={classes.appBar} >
                    <Toolbar disableGutters>
                        <BrowserRouter>
                            <Button component={Link} to="/" className={classes.logoContainer} disableRipple >

                                <img className={classes.LogoImage} src={easybeLogo} alt="easybe logo"/>
                            </Button>

                        </BrowserRouter>
                        {mobileDrawer}
                    </Toolbar>
                </AppBar>
            </ElevationScroll> : permanentDrawer}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </main>

        </div>
    );
}

export default AppDrawer;