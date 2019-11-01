import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';
import { connect } from "react-redux";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },


}));


const Dashboard = ({ user, isLoggedIn }) => {
  const classes = useStyles();
  const welcomeName = (user && isLoggedIn && user.first_name)? `${user.first_name} ${user.last_name}` : 'Guest';
  return (
    <div >


      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
              Welcome {welcomeName} to React Auth App
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>

          </Container>
        </div>
      </main>

    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(Dashboard)