import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div >


      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Welcome Guest to React Auth App
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