/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

const styles = {
  root: {
    background: "white"
  },
  input: {
    color: "white"
  }
};

const Layout = ( props ) => {
  return (
    <div
      style={{
        margin: `auto 10%`
      }}
    >
      <main>{ props.children }</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.node.isRequired
}

export default withStyles(styles)(Layout)
