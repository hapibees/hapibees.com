import React from "react"
import PropTypes from "prop-types"

import { Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  titleGrid:{
    [theme.breakpoints.down('sm')]: {
      marginTop: `100%`
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: `25%`
    }
  },
  title: {
    lineHeight: theme.typography.lineHeight.xs,
    fontFamily: theme.typography.fontFamily.stratos,
    fontWeight: theme.typography.fontWeight.bold,
    textAlign: `left`,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.fontSize.sm
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.fontSize.md
    },
    [theme.breakpoints.down('lg') && theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize.lm
    },
    [theme.breakpoints.down('xl') && theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize.lg
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: theme.typography.fontSize.xl
    }
  },
  reasonsTitle: {
    lineHeight: theme.typography.lineHeight.xs,
    fontFamily: theme.typography.fontFamily.stratos,
    fontWeight: theme.typography.fontWeight.bold,
    textAlign: `left`,
    color: theme.pallette.yellow,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.fontSize.sm
    },
    [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.fontSize.md
    },
    [theme.breakpoints.down('lg') && theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize.lm
    },
    [theme.breakpoints.down('xl') && theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize.lg
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: theme.typography.fontSize.xl
    }
  },
  reasonsDescription: {
    lineHeight: theme.typography.lineHeight.xs,
    fontFamily: theme.typography.fontFamily.stratos,
    fontStyle: theme.typography.fontStyle.regular,
    textAlign: `left`,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.fontSize.xs,
    },
    [theme.breakpoints.down('lg') && theme.breakpoints.up('md')]: {
      fontSize: theme.typography.fontSize.sm,
    },
    [theme.breakpoints.down('xl') && theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.fontSize.md,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: theme.typography.fontSize.lg,
    }
  }
})

const Reasons = (props) => {
  return (
    <Grid container spacing={6} className={props.classes.titleGrid}>
      <Grid item xs={12}>
        <p className={props.classes.title}>
          A importância das abelhas
        </p>
      </Grid>
      {
        props.reasonsData.data.map(reason => {
          return (
            <Grid item xs={12} md={6}>
              <p className={props.classes.reasonsTitle}>
                {reason.title}
              </p>
              <p className={props.classes.reasonsDescription}>
                {reason.description}
              </p>
            </Grid>
          )
        })
      }
    </Grid>
  )
}

Reasons.defaultProps = {
  classes: PropTypes.object.isRequired,
  reasonsData: {
    data: [
      {
        title: "85 das 115",
        description: "Mais importantes culturas de comida dependem de polinizadores."
      },
      {
        title: "217 biliões de dólares",
        description: "São gerados anualmente por indústrias que dependem da polinização."
      },
      {
        title: "90%",
        description: "Das espécies de plantas com flores do mundo dependem de abelhas para a polinização. Muitas espécies animais dependem da atividade das abelhas para suas fontes alimentares."
      },
      {
        title: "Mais de 30%",
        description: "Das perdas anuais de colméias foram relatadas por apicultores dos EUA e da Europa durante grande parte da década passada."
      }
    ]
  }
}

export default withStyles(styles)(Reasons)