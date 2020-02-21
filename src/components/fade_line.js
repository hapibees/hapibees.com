import React from "react"
import PropTypes from "prop-types"

import { Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  fade: {
    background: `linear-gradient(to right,
      #FFCD00 20%,
      rgba(245,255,255, 0) 100%)`,
    WebkitBackgroundClip: `text`,
    WebkitTextFillColor: `transparent`,
    lineHeight: theme.typography.lineHeight.xs,
    fontFamily: theme.typography.fontFamily.stratos,
    fontWeight: theme.typography.fontWeight.bold,
    textAlign: `center`,
    color: theme.pallette.yellow,
    marginTop: `250px`,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.fontSize.md,
      lineHeight: theme.typography.lineHeight.xl,
      marginTop: `200px`
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.fontSize.md,
      marginTop: `200px`
    },
    [theme.breakpoints.down('lg') && theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize.lg,
      marginTop: `200px`
    },
    [theme.breakpoints.down('xl') && theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize.xl,
      marginTop: `300px`
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: theme.typography.fontSize.xxl,
      marginTop: `300px`
    }
  }
})

const FadeLine = (props) => (
  <Grid item xs={12}>
    <div className={props.classes.fade}>
      E as abelhas estão a desaparecer
    </div>
  </Grid>
)

FadeLine.defaultProps = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FadeLine)
