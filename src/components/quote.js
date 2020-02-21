import React from "react"
import PropTypes from "prop-types"

import { Grid } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  grid: {
    maxWidth: `80%`,
    margin: `auto`,
    [theme.breakpoints.down('sm')]: {
      marginTop: `150%`
    },
    [theme.breakpoints.down('lg') && theme.breakpoints.up('sm')]: {
      marginTop: `30%`
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: `35%`
    }
  },
  aspa:{
    position: `absolute`,
    [theme.breakpoints.up('xl')]: {
      width: `10%`
    }
  },
  quote: {
    lineHeight: theme.typography.lineHeight.xs,
    fontFamily: theme.typography.fontFamily.glimet,
    fontStyle: theme.typography.fontStyle.light,
    textAlign: `left`,
    color: theme.pallette.black,
    opacity: 0.7,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.fontSize.xs,
      paddingTop: `10%`,
      paddingLeft: `5%`,
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.fontSize.xs,
      paddingTop: `5%`,
      paddingLeft: `5%`
    },
    [theme.breakpoints.down('lg') && theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize.sm,
      paddingTop: `4%`,
      paddingLeft: `4%`
    },
    [theme.breakpoints.down('xl') && theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize.md,
      paddingTop: `3%`,
      paddingLeft: `3%`
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: theme.typography.fontSize.lg,
      paddingTop: `5%`,
      paddingLeft: `5%`
    }
  },
  author: {
    lineHeight: theme.typography.lineHeight.xs,
    fontFamily: theme.typography.fontFamily.glimet,
    textAlign: `left`,
    color: theme.pallette.black,
    paddingLeft: `5%`,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.fontSize.xxs
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.fontSize.xxs,
    },
    [theme.breakpoints.down('lg') && theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize.xs,
    },
    [theme.breakpoints.down('xl') && theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize.sm,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: theme.typography.fontSize.lm,
    }
  }
})

const Quote = (props) => {
  const data = useStaticQuery(graphql`
    query {
      aspa: file(relativePath: { eq: "aspa.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
    }
  `)

  return (<Grid item xs={12} className={props.classes.grid}>
      <img src={data.aspa.childImageSharp.fluid.src} alt="" className={props.classes.aspa}/>
      <p className={props.classes.quote}>
        Se as abelhas desaparecessem do planeta Terra, restariam ao Homem apenas quatro anos de vida.
      </p>
      <p className={props.classes.author}>
        Maurice Maeterlinck, The Life of the Bee
      </p>
    </Grid>)
}

Quote.defaultProps = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Quote)
