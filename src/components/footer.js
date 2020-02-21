import React from "react"
import PropTypes from "prop-types"

import { Grid, Button } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
//import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'

const styles = theme => ({
  footer: {
    marginTop:
    `50px`,
    backgroundColor: theme.pallette.black,
    paddingBottom: `30px`,
    paddingTop: `50px`
  },
  buttonGrid: {
    width: `40%`,
    margin: `auto`
  },
  button: {
    fontFamily: theme.typography.fontFamily.stratos,
    backgroundColor: theme.pallette.white,
    display: `flex`,
    textAlign: `center`,
    [theme.breakpoints.down('sm')]: {
      lineHeight: theme.typography.lineHeight.m,
      fontSize: theme.typography.fontSize.xs
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize.sm
    },
    [theme.breakpoints.down('xl') && theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize.md
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: theme.typography.fontSize.lg
    },
    '&:hover': {
      background: `#FFCD00`,
    }
  },
  iconsGrid: {
    margin: `2em auto`,
    [theme.breakpoints.down('sm')]: {
      width: `40%`
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
      width: `30%`
    },
    [theme.breakpoints.down('lg') && theme.breakpoints.up('md')]: {
      width: `20%`
    },
    [theme.breakpoints.up('lg')]: {
      width: `10%`
    }
  },
  icons: {
    fontSize: theme.typography.fontSize.sm,
    marginLeft: `25%`,
    color: `white`,
    '&:hover': {
      color: `#FFCD00`,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: theme.typography.fontSize.md
    }
  }
})

const Footer = (props) => {
  return (
    <footer className={props.classes.footer}>
      <Grid xs={12} className={props.classes.buttonGrid}>
        <Button className={props.classes.button} variant="contained" href="mailto:hello@hapibees.com" target="_top">
          Mantenha-se a par
        </Button>
      </Grid>

      <Grid container xs={12} spacing={1} className={props.classes.iconsGrid}>
        <Grid item xs={4}>
          <a href="https://www.facebook.com/hapibees" target="_blank" rel="noopener noreferrer">
            <FacebookIcon className={props.classes.icons}/>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a href="https://instagram.com/hapibees" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className={props.classes.icons}/>
          </a>
        </Grid>
        <Grid item xs={4}>
          <a href="https://twitter.com/hapibees" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className={props.classes.icons}/>
          </a>
        </Grid>
      </Grid>
    </footer>
  )
}

Footer.defaultProps = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
