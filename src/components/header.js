import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { withStyles } from "@material-ui/core/styles"
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'

const styles = theme => ({
  background: {
    position: `absolute`,
    zIndex: -1,
    left: 0,
    top: 0,
    [theme.breakpoints.down('sm')]: {
      width: `100%`
    },
    [theme.breakpoints.up('sm')]: {
      width: `95%`
    }
  },
  logo: {
    position: `absolute`,
    paddingLeft: `10%`,
    [theme.breakpoints.down('sm')]: {
      paddingTop: `20%`,
      width: `35%`
    },
    [theme.breakpoints.up('sm')]: {
      width: `15%`,
      paddingTop: `9%`
    }
  },
  title: {
    paddingLeft: `10%`,
    [theme.breakpoints.down('sm')]: {
      paddingTop: `30%`
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: `9%`
    }
  },
  text: {
    fontFamily: `stratos, sans-serif`,
    fontWeight: theme.typography.fontWeight.bold,
    textAlign: `left`,
    [theme.breakpoints.down('sm')]: {
      lineHeight: theme.typography.lineHeight.s,
      fontSize: theme.typography.fontSize.lm,
      width: `90%`
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
      lineHeight: theme.typography.lineHeight.l,
      fontSize: theme.typography.fontSize.md,
      width: `60%`
    },
    [theme.breakpoints.down('lg') && theme.breakpoints.up('md')]: {
      lineHeight: theme.typography.lineHeight.m,
      fontSize: theme.typography.fontSize.lg,
      width: `60%`
    },
    [theme.breakpoints.down('xl') && theme.breakpoints.up('lg')]: {
      lineHeight: theme.typography.lineHeight.m,
      fontSize: theme.typography.fontSize.xl,
      width: `60%`
    },
    [theme.breakpoints.up('xl')]: {
      lineHeight: theme.typography.lineHeight.m,
      fontSize: theme.typography.fontSize.xxl,
      width: `60%`
    },
    [`@media (min-width: 3000px)`]: {
      lineHeight: theme.typography.lineHeight.l,
      fontSize: theme.typography.fontSize.xxxl,
    }
  }
})

const Header = ( props ) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      background: file(relativePath: { eq: "background.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            src
          }
        }
      }
      backgroundMobile: file(relativePath: { eq: "background_mobile.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            src
          }
        }
      }
      logo: file(relativePath: { eq: "logo_header.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            src
          }
        }
      }
    }
  `)

  return (
    <header>
      <img src={isWidthUp('sm', props.width) ? data.background.childImageSharp.fluid.src : data.backgroundMobile.childImageSharp.fluid.src } alt="" className={props.classes.background}/>
      <img src={data.logo.childImageSharp.fluid.src} alt="" className={props.classes.logo}/>
      <div className={props.classes.title}>
        <p className={props.classes.text}>
          {data.site.siteMetadata.title}
        </p>
      </div>
    </header>
    )
}

Header.defaultProps = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(withWidth()(Header))
