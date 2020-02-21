import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
// import Reasons from "../components/reasons"
import Quote from "../components/quote"
import FadeLine from "../components/fade_line"
import AboutUs from "../components/about_us"

import { MuiThemeProvider, withStyles } from "@material-ui/core/styles"
import theme from "../styles/theme"

const styles = _theme => ({
  "@global": {
    body: {
      margin: 0,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`
    },
    html: {
      MsTextSizeAdjust: `100%`,
      WebkitTextSizeAdjust: `100%`
    }
  },
});

const IndexPage = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Header/>
      <Layout>
        <SEO />
        {/* <Reasons /> */}
        <Quote />
        <FadeLine />
        <AboutUs />
      </Layout>
      <Footer />
    </ MuiThemeProvider>
  )
}

IndexPage.propTypes = {
  classes: PropTypes.node.isRequired
}

export default withStyles(styles)(IndexPage)
