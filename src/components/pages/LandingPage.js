import React from 'react';
import Lottie from "react-lottie";

import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import animationData from "../../animations/landinganimation/data";
import ButtonArrow from '../ui/ButtonArrow';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websitesIcon from '../../assets/websiteIcon.svg';

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
          maxWidth: "30em"
        }
      },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]:{
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]:{
            marginTop: "2em"
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]:{
            marginRight: 10
        }
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]:{
            marginLeft: 0
        }
    },
    specialText:{
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]:{
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
            marginTop: "5em"
        }
    }
}))

export default function LandingPage(){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    const defaultOptions = {
        loop: true,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return(
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item > {/* start block */}
                    <Grid container direction="row" justify="space-around" alignItems="center" >
                        <Grid item sm className={classes.heroTextContainer}>
                            <Typography align="center" variant="h2">Bringing West Coast Technology <br /> to the Midwest</Typography>
                            <Grid container justify="center" className={classes.buttonContainer}>
                                <Grid item>
                                    <Button variant="contained" className={classes.estimateButton}>Free Estimate</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButtonHero}>
                                        <span style={{marginRight: 10}}>Learn More</span> 
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm item className={classes.animation}>
                            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item> {/* services block*/}
                {" "}
                    <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                        <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}> 
                            <Typography variant="h4">Custom Software Development</Typography>
                            <Typography variant="subtitle1" className={classes.subtitle}> Save Energy. Save Time. Save Money.</Typography>
                            <Typography> Complete digital solution, from investigation to {" "}
                            <span className={classes.specialText}>celebration</span>. </Typography>
                            <Button variant="outlined" className={classes.learnButton}>
                                <span style={{marginRight: 10}}>Learn more</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                        <Grid item>
                            <img alt="custom software icon" src={customSoftwareIcon} className={classes.icon}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item> {/* mobile apps block*/}
                {" "}
                    <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                        <Grid item style={{textAlign: matchesSM ? "center" : undefined}}> 
                            <Typography variant="h4">Mobile App Development</Typography>
                            <Typography variant="subtitle1" className={classes.subtitle}> Extend Functionality. Extend Access. Extend Engagement.</Typography>
                            <Typography> Integrate your web experience or create a standalone app {matchesSM ? null : <br />} with either mobile platfotm</Typography>
                            <Button variant="outlined" className={classes.learnButton}>
                                <span style={{marginRight: 10}}>Learn more</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                        <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                            <img alt="mobile software icon" src={mobileAppsIcon} className={classes.icon}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item> {/* websites block*/}
                {" "}
                    <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                        <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : undefined}}> 
                            <Typography variant="h4">Website Development</Typography>
                            <Typography variant="subtitle1" className={classes.subtitle}> Reach More. Discover More. Sell More.</Typography>
                            <Typography> Optimized for Search Engines, built for speed. {" "}</Typography>
                            <Button variant="outlined" className={classes.learnButton}>
                                <span style={{marginRight: 10}}>Learn more</span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                        <Grid item>
                            <img alt="website icon" src={websitesIcon} className={classes.icon}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}