import React from "react"
import PropTypes from "prop-types"

import { Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles= theme => ({
  container: {
    marginTop: `150px`
  },
  fact: {
    paddingTop: `5%`,
    lineHeight: theme.typography.lineHeight.xs,
    fontFamily: theme.typography.fontFamily.stratos,
    color: theme.pallette.black,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.fontSize.xs,
      width: `100%`,
      textAlign: `left`
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize.xs,
      margin: `auto`,
      width: `70%`,
      textAlign: `center`
    },
    [theme.breakpoints.down('xl') && theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize.sm,
      margin: `auto`,
      width: `70%`,
      textAlign: `center`
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: theme.typography.fontSize.md,
      margin: `auto`,
      width: `70%`,
      textAlign: `center`
    }
  },
  centerGrid: {
    marginTop: `0%`,
    marginBottom: `5%`
  },
  factYellow: {
    paddingTop: `5%`,
    fontWeight: theme.typography.fontWeight.bold,
    lineHeight: theme.typography.lineHeight.xs,
    fontSize: theme.typography.fontSize.sm,
    fontFamily: theme.typography.fontFamily.stratos,
    textAlign: `center`,
    color: theme.pallette.yellow,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.fontSize.xs,
      width: `100%`,
      textAlign: `left`
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize.xs,
      margin: `auto`,
      width: `70%`,
      textAlign: `center`
    },
    [theme.breakpoints.down('xl') && theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize.sm,
      margin: `auto`,
      width: `70%`,
      textAlign: `center`
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: theme.typography.fontSize.md,
      margin: `auto`,
      width: `70%`,
      textAlign: `center`
    }
  }
})

const AboutUs = (props) => {
  return (
    <Grid container className={props.classes.container}>
      <Grid item xs={12} className={props.classes.centerGrid}>
        <p className={props.classes.fact}>
          As abelhas precisam da nossa ajuda, e os apicultores também. Durante toda a história humana, as abelhas disponibilizaram-nos o seu poder.
        </p>
        <p className={props.classes.factYellow}>
          Agora é a vez de pôr o poder das pessoas ao seu serviço.
        </p>
      </Grid>
    </Grid>)
}

AboutUs.defaultProps = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AboutUs)
