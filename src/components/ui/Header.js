import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.svg'

function ElevationScroll({ children }){
    const trigger = useScrollTrigger({
        disableHysteresis: true, 
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.modal + 1
    },
    toolbarMargin: { 
        ...theme.mixins.toolbar,
        marginBottom: "3rem",
        [theme.breakpoints.down("md")] : {
            marginBottom: "2rem"
        },
        [theme.breakpoints.down("xs")] : {
            marginBottom:"1rem"
        }
    },
    logo: { 
        height: "7rem",
        [theme.breakpoints.down("md")] : {
            height: "6rem"
        },
        [theme.breakpoints.down("xs")] : {
            height:"4.8rem"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: { 
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate, 
        borderRadius:"50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor:"transparent"
        }
    },
    menu: { 
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: 0
    },
    menuItem: { 
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: { 
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    }, 
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        }
    }
}))

export default function Header({value, setValue, selectedIndex, setSelectedIndex}) {
    const classes = useStyles();
    //gives access to the default theme within the component  
    const theme = useTheme();
    //screen sizes of medium and below will return true
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [anchor, setAnchor] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    const handleClick = e => {
        setAnchor(e.currentTarget)
        setOpenMenu(true)
    }

    const handleMenuItemClick = (e, index) => {
        setAnchor(null)
        setOpenMenu(false)
        setSelectedIndex(index)
    }

    const handleClose = e => {
        setAnchor(null)
        setOpenMenu(false)
    }

    const menuOptions = [
        {name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software Development", link: "/custom-software", activeIndex: 1, selectedIndex: 1},
        {name: "Mobile App Development", link: "/mobile-apps", activeIndex: 1, selectedIndex: 2},
        {name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3}
    ]

    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {
            name: "Services", 
            link: "/services", 
            activeIndex: 1, 
            ariaOwns: anchor ? "simple-menu" : undefined,
            ariaPopup: anchor ? true : undefined,
            mouseOver: e =>handleClick(e)

        },
        {name: "The Revolution", link: "/revolution", activeIndex: 2},
        {name: "About Us", link: "/about", activeIndex: 3},
        {name: "Contact Us", link: "/contact", activeIndex: 4},
    ]

    // active tab refresh fix
    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch(window.location.pathname){
                case `${route.link}`:
                    if(value !== route.activeIndex) {
                        setValue(route.activeIndex)
                        if(route.selectedIndex && route.selectedIndex !== selectedIndex){
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                default: 
                    break;
            }
        })
    }, [value, menuOptions, selectedIndex, routes]);

    const tabs = (
        <>
            <Tabs 
                className={classes.tabContainer} 
                value={value}
                onChange={handleChange}
            >
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver}
                    /> 
                ))}
            </Tabs>
            <Button 
                variant="contained" 
                color="secondary" 
                className={classes.button}> 
                Free Estimate
            </Button>
            <Menu 
                id="simple-menu" 
                anchorEl={anchor} 
                open={openMenu} 
                onClose={handleClose} 
                MenuListProps={{onMouseLeave: handleClose}}
                classes={{paper: classes.menu}}
                elevation={0}
                keepMounted
                style={{zIndex: 1302}}
            >
                {menuOptions.map((el, i) => (
                    <MenuItem 
                        key={`${el}${i}`}
                        component={Link} 
                        to={el.link} 
                        classes={{root: classes.menuItem}} 
                        onClick={event=>{
                            handleMenuItemClick(event, i); 
                            setValue(1); 
                            handleClose()}}
                        selected={i === selectedIndex && value === 1}>
                        {el.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )

    const drawer = (
        <>
            <SwipeableDrawer 
                disableBackdropTransition={!iOS} 
                disableDiscovery={iOS} 
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            divider
                            key={`${route}${route.activeIndex}`}
                            button
                            component={Link}
                            to={route.link}
                            selected={value === route.activeIndex}
                            classes={{selected: classes.drawerItemSelected}}
                            onClick={() => {
                                setOpenDrawer(false);
                                setValue(route.activeIndex);
                            }}
                        >
                            <ListItemText
                                className={classes.drawerItem}
                                disableTypography
                            >  
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem 
                        classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
                        divider 
                        button 
                        onClick={()=> {setOpenDrawer(false); setValue(5)}}
                        component={Link} 
                        to="/estimate"
                        selected={value === 5}
                    > 
                        <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                    </ListItem>
                </List>    
            </SwipeableDrawer>
            <IconButton 
                onClick={() => setOpenDrawer(!openDrawer)} 
                disableRipple 
                className={classes.drawerIconContainer}
            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </>
    )

    return(
        <>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button 
                            component={Link} 
                            to="/" 
                            disableRipple
                            className={classes.logoContainer} 
                            onClick={()=>setValue(0)}
                        >
                            <img src={logo} alt="company logo" className={classes.logo}/>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    )
}